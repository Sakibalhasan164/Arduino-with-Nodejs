int ledpin=8;
//int switchPressed=false;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledpin,OUTPUT);
   
}

void loop() {
  //if something is availabel from the serial port
  if(Serial.available()>0){
    String receivedString="";
    while(Serial.available()>0){
      receivedString+=char(Serial.read());
      }
//print the incoming data
Serial.println(receivedString);
if(receivedString == "1"){
  //turn the led on
  digitalWrite(ledpin,HIGH);
  }else{
    digitalWrite(ledpin,LOW);
    }     
}
  
}
