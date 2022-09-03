#include <Wire.h>
//#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include "ThingSpeak.h"

LiquidCrystal_I2C lcd(0x27, 16, 2);

//wifi config
const char* ssid = "Brielle"; //wifi ssid
const char* password = "sweetlittleMaryJane"; //wifi password

//thing speak config
const unsigned long channel_id = 1848630;
const char* write_api_key = "48JZEEL1FKM9WTY2";

//wifi client object
WiFiClient client;

//define pins
int gasSensor = 12;  //D6
int flameSensor = 14;  //D5
int led = 13;  //D7
int buzzer = 15;  //D8

int gasValue;
int gasThreshold = 100;
int fireValue;

//*****lcd pins: SDA to D2, SCL to D1

void setup() {
  pinMode(gasSensor, INPUT);
  pinMode(flameSensor, INPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(led, OUTPUT);
  lcd.begin();
  lcd.clear();

  //connect to thing speak
  ThingSpeak.begin(client);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Wifi connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  Serial.println();
  Serial.print("connecting");
  
  while(WiFi.status()!= WL_CONNECTED){
    delay(500);
    Serial.print(".");
    }
   Serial.println();
  
   Serial.println("Wifi connected");
   delay(500);
   Serial.print("node mcu IP address: ");
   Serial.print(WiFi.localIP());

   randomSeed(micros());
}

void loop() {
  gasValue = analogRead(gasSensor);
  fireValue = digitalRead(flameSensor);
  Serial.println(fireValue);

   //lcd messages
  String gasMessage =  "Alert! Gas detected";
  String fireMessage =  "Alert! Fire detected";
  String gasAndFireMessage =  "Alert! Gas and fire detected";

  ThingSpeak.setField(1, gasValue);
  ThingSpeak.setField(2, fireValue);
  
  if (gasValue < gasThreshold && fireValue == LOW){
    digitalWrite(led, HIGH);
    tone(buzzer, 1000); 
    delay(1000);
    digitalWrite(led, LOW);
    noTone(buzzer);
    delay(1000);
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(fireMessage);
   }
  else if (gasValue > gasThreshold && fireValue == HIGH){
    digitalWrite(led, HIGH);
    tone(buzzer, 1000); 
    delay(1000);
    digitalWrite(led, LOW);
    noTone(buzzer);
    delay(1000);
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(gasMessage);
   }
  else if (gasValue > gasThreshold && fireValue == LOW){
    digitalWrite(led, HIGH);
    tone(buzzer, 1000); 
    delay(1000);
    digitalWrite(led, LOW);
    noTone(buzzer);
    delay(1000);
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(gasAndFireMessage);
   }
  else{
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("system stable");
    delay(500);
   }  
}
