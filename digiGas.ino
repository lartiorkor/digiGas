#include <Wire.h>
//#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include "ThingSpeak.h"

LiquidCrystal_I2C lcd(0x27, 16, 2);
//*****lcd pins: SDA to D2, SCL to D1

//wifi config
const char* ssid = "Brielle"; //wifi ssid
const char* password = "sweetlittleMaryJane"; //wifi password

//thingspeak config
const unsigned long channel_id = 1848315;
const char* write_api_key = "4MPIWSPD115P6LD1";

//wifi client object
WiFiClient client;

//define pins
int gasSensor = 12;  //D6
int flameSensor = 14;  //D5
int led = 13;  //D7
int buzzer = 15;  //D8

void setup() {
  pinMode(gasSensor, INPUT);
  pinMode(flameSensor, INPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(led, OUTPUT);
  
  lcd.begin();
  lcd.clear();

  Serial.begin(115200);

  //wifi connection
  Serial.println("Wifi connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status()!= WL_CONNECTED){
    delay(500);
    Serial.print(".");
    }
   Serial.println();
  
   Serial.println("Wifi connected");
   delay(500);
   Serial.print("node mcu IP address: ");
   Serial.print(WiFi.localIP());

   //connect to thingspeak
  ThingSpeak.begin(client);

   randomSeed(micros());
}

void loop() {
  int gasValue;
  int gasThreshold = 100;
  int fireValue;
  
  gasValue = analogRead(gasSensor);
  fireValue = digitalRead(flameSensor);
  Serial.println(fireValue);

   //lcd messages
  String alert =  " Alert!!! ";
  String gasMessage =  " Gas detected";
  String fireMessage =  "Fire detected";
  String gasAndFireMessage =  "Gas & fire found";

  //logging values to thingspeak
  int gasValueUpload;
  if (gasValue != gasValueUpload){
    gasValueUpload = gasValue;
    ThingSpeak.setField(1, gasValueUpload);
  }

  int fireValueUpload;
  if (fireValue != fireValueUpload){
    fireValueUpload = fireValue;
    ThingSpeak.setField(2, fireValue);
   }
   
  ThingSpeak.writeFields(channel_id, write_api_key);

  //gas sensor and flame sensor logic
  if (gasValue < gasThreshold && fireValue == LOW){
    digitalWrite(led, HIGH);
    tone(buzzer, 1000); 
    delay(500);
    digitalWrite(led, LOW);
    noTone(buzzer);
    delay(500);
    lcd.clear();
    lcd.setCursor(2, 0);
    lcd.print(alert);
    lcd.setCursor(0, 1);
    lcd.print(fireMessage);
   }
  else if (gasValue > gasThreshold && fireValue == HIGH){
    digitalWrite(led, HIGH);
    tone(buzzer, 1000); 
    delay(500);
    digitalWrite(led, LOW);
    noTone(buzzer);
    delay(500);
    lcd.clear();
    lcd.setCursor(2, 0);
    lcd.print(alert);
    lcd.setCursor(0, 1);
    lcd.print(gasMessage);
   }
  else if (gasValue > gasThreshold && fireValue == LOW){
    digitalWrite(led, HIGH);
    tone(buzzer, 1000); 
    delay(500);
    digitalWrite(led, LOW);
    noTone(buzzer);
    delay(500);
    lcd.clear();
    lcd.setCursor(2, 0);
    lcd.print(alert);
    lcd.setCursor(0, 1);
    lcd.print(gasAndFireMessage);
   }
  else{
    lcd.clear();
    lcd.setCursor(1, 0);
    lcd.print(" --digiGas-- ");
    lcd.setCursor(1, 1);
    lcd.print("System Stable");
    delay(500);
   }  
}
