#include <RFduinoBLE.h>

//int pin = 6;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
//  pinMode(pin, OUTPUT);
  RFduinoBLE.advertisementData = "button";
  RFduinoBLE.advertisementInterval = 500;
  RFduinoBLE.deviceName = "RFduino";
  RFduinoBLE.txPowerLevel = -20;

  RFduinoBLE.begin();
  Serial.println("RFduino BLE stack started");
}

void loop() {
  // put your main code here, to run repeatedly:

  RFduino_ULPDelay(INFINITE);
  
//  digitalWrite(pin, LOW);
//  Serial.println('off');
//  delay(1000);
//  digitalWrite(pin, HIGH);
//  Serial.println('on');
//  delay( 3000);
//  digitalWrite(pin, LOW);
//  Serial.println('off');
}

void RFduinoBLE_onAdvertisement(){
  Serial.println("RFduino BLE is advertising");
}

void RFduinoBLE_onConnect(){
  Serial.println("RFduino BLE connection successful");
}

void RFduinoBLE_onDisconnect(){
  Serial.println("RFduino BLE disconnected");
}

void RFduinoBLE_onReceive(char *data, int len)
{
  // If the first byte is 0x01 / on / true
  Serial.println("Received data over BLE");
  if (data[0])
  {
    Serial.println("Correct data received");
  }
  else
  {
    Serial.println("Incorrect data");
  }
}



