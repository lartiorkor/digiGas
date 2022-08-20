#include<SoftwareSerial.h>
#include<LiquidCrystal.h>

//define pins
int gasSensor = A1;
int flameSensor = 2;
int led = 4;
int buzzer = 3;

float gasValue;
float gasThreshold = 50;
float fireValue;

void setup() {
  Serial.begin(9600);
  pinMode(gasSensor, INPUT);
  pinMode(flameSensor, INPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(led, OUTPUT);

  //lcd messages
  String gas =  "Alert! Gas detected";
  String fire =  "Alert! Fire detected";
  String gasAndFire =  "Alert! Gas and fire detected"
  
}

void loop() {
  gasValue = analogRead(gasSensor);
  fireValue = digitalRead(flameSensor);
  /*
  Serial.print("Gas Status: ");
  Serial.print(gasValue);
  Serial.println(" ");
  Serial.print("Fire Status: ");
  Serial.print("fireValue");
  Serial.println(" ");
  delay(100);
*/
  if (gasValue < gasThreshold && fireValue == HIGH){
    //digitalWrite(buzzer, HIGH);
    tone(buzzer, 5000); 
    delay(500);
    noTone(buzzer);
    delay(500);
    digitalWrite(led, HIGH);
    Serial.print("Alert! Fire detected"); //to be printed on lcd and sent to user
    }
  else if (gasValue > gasThreshold && fireValue == LOW){
    digitalWrite(buzzer, HIGH);
    tone(buzzer, 5000); 
    delay(500);
    noTone(buzzer);
    delay(500);
    digitalWrite(led, HIGH);
    Serial.print("Alert! Gas detected"); //to be printed on lcd and sent to user
    }
  else if (gasValue > gasThreshold && fireValue == HIGH){
    digitalWrite(buzzer, HIGH);
    tone(buzzer, 5000); 
    delay(500);
    noTone(buzzer);
    delay(500);
    digitalWrite(led, HIGH);
    Serial.print("Alert! Gas and fire detected"); //to be printed on lcd and sent to user
    }
  else{
    Serial.println("System Stable");
    }  
}
