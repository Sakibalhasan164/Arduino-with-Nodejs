let socket=io();
const onBtn=document.getElementById("ON");
const offBtn=document.getElementById("OFF")
const led=document.getElementById("led")
const btn=document.getElementById("s")

onBtn.addEventListener("click",(e)=>{
    // console.log("turn the light ON");
    led.style.backgroundColor="green" 
    socket.emit("LIGHT-ON","1") 
})
offBtn.addEventListener("click",()=>{
    // console.log("turn the light OFF");
    socket.emit("LIGHT-OFF","0")
    led.style.backgroundColor="red"
})


//pot



//canvas stufff

// const canvas=document.getElementById("canvas")
// const cWidth=canvas.width
// const cHeight=canvas.height
// const ctx=canvas.getContext("2d")
// // setInterval(() => { 
    // //         circleRadius+=1
    // //         drawCricle(cWidth/2,cHeight/2,circleRadius)
    // //         console.log(circleRadius);
    // //     }, 200);
    // //function to draw circle on the canvas
    // function drawCricle(x,y,r){
        //    ctx.beginPath()
        //    ctx.arc(x,y,r,0,Math.PI*2)
        //    ctx.stroke()
        // }
        



        const potValue=document.getElementById("value");
        let radiusFromArduino;
        socket.on("potValue",(val)=>{
            // console.log(val);
            potValue.innerText=val;
            radiusFromArduino=val;
        })


        //p5 js for canvas
        let radius=60
        // btn.addEventListener("click",()=>{
            //     radius+=5
            // })
            function setup(){
                createCanvas(300,300)
            }
            function draw(){
                background(255)
                noStroke()
                fill(0,0,255)
                //map the pot value to the radius
               let mappedRadius= map(radiusFromArduino,0,1024,0,200)
                circle(width/2,height/2,mappedRadius)
    // radius+=2
}
