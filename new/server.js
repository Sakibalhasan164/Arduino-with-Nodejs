let SerialPort=require('serialport')
const parsers = SerialPort.parsers;
const express=require("express")
const app=express();
//path for the express app
// const path=require("path")
//socket io stuff
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { Socket } = require('dgram');
const io = new Server(server);


const parser = new parsers.Readline({
    delimiter: '\r\n'
});
var port = new SerialPort('COM3',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

app.use(express.static("public"))




app.get("/",(req,res)=>{
    res.sendFile(__dirname , 'public/index.html')
})
//if there is a connection available
io.on("connection",(Socket)=>{
    // console.log("CONNECTED");
    // Socket.on("disconnect",()=>{
        //     console.log("disCONNECTED");
        // })
        Socket.on("LIGHT-ON",(msg)=>{
            console.log(msg);
            port.write(msg)
        })
        Socket.on("LIGHT-OFF",(msg)=>{
            console.log(msg);
            port.write(msg)
        })
        
    })
    server.listen(3000,console.log("server is listing on port 3000"))
    
    //run the script and turn the led on
    // setTimeout(() => {
        //    port.write("1") 
        //    console.log("it is running!!");
        // }, 3000); 
 //read the incoming data comming from the arduino
        parser.on("data",(data)=>{
            //got this data from arduino
            //now just emit to the front end;
            // console.log(data);
            io.emit("potValue",data)
        
        })
        
