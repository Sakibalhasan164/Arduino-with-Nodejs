let socket=io();
const onBtn=document.getElementById("ON");
const offBtn=document.getElementById("OFF")
const led=document.getElementById("led")

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