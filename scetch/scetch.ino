int ledpin=8;
//the pot is attached to
int analogPin=A3;
int previousValue=0;
int currentValue=0;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledpin,OUTPUT);
  
    
}

void loop() {
  currentValue=analogRead(analogPin);
//  Serial.println(currentValue);
//  delay(50);
  if(previousValue != currentValue){
    Serial.println(currentValue);
    previousValue=currentValue;
  }
  delay(20);

  
   //send a string via serial port
//    Serial.println("hello from arduino");
//    delay(600);
//   int   potValue=analogRead(analogPin);
//   Serial.println(potValue);
//   delay(500);

    
    
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
