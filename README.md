> Diese Seite bei [https://mkleinsb.github.io/pxt-shiun_robot/](https://mkleinsb.github.io/pxt-shiun_robot/) öffnen

![image](https://github.com/MKleinSB/pxt-Shiun_robot/blob/master/CalliopeBiPod.png)

## Diese Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

Öffne [https://makecode.microbit.org/](https://makecode.microbit.org/) oder öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)

* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/mkleinsb/pxt-shiun_robot** suchen und importieren

## Diese Erweiterung bearbeiten ![Build Status Abzeichen](https://github.com/mkleinsb/pxt-shiun_robot/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/mkleinsb/pxt-shiun_robot** ein und klicke auf Importieren

# Calliope Mini Servoboard
Das Calliope Mini Servoboard gibt es hier:

https://www.hackster.io/MKlein/servoboard-fur-den-calliope-mini-6fb045

Zusätzlich muss man Servoboard 5Volt und Ground abzwacken und am Calliope Mini P1 zur Steuerung der beiden oberen Servos. Die beiden oberen Servos laufen parallel.

# 3D files at thingiverse

https://www.thingiverse.com/thing:3469886

![image](https://github.com/MKleinSB/pxt-Shiun_robot/blob/master/robot.png)
   
# Shiun Robot (Micro:bit Biped robot)
Using Micro:bit + MiniPlan MiniPOW board(Micro:bit power extension board) to control the Shiun Robot

MiniPlan : https://www.facebook.com/MiniPlanRobot/

This extension will provide the basic motion for user to control the robot. 

Basic motion : 

Forward / Backward / Turn Left / Turn Right / Stop

## Code Example 
1. Define the offset value for 4-servo motors.  (C16 / C17 /P1 /P1)
Ich habe die Servos uf 90 Grad gestellt und dann eingebaut. So brauchte ich nicht mit verschiedenen Werten zu spielen. 
      
2. Assign the motion to the robot. 

![image](https://github.com/MKleinSB/pxt-Shiun_robot/blob/master/CalliBiPodBlocks.png)

Javascipt example code : 
==============================================================================
MiniPOW.set_offset(5, 6, -9)

MiniPOW.motion(MiniPOW.dnum.Stop)

basic.forever(function () {
	
})


## License

Non-Commercial license.

Author : Mason Chen
https://www.facebook.com/mason.chen.1420


#### Metadaten (verwendet für Suche, Rendering)

* for PXT/microbit
* for PXT/calliope

```package
MKleinSB/pxt-Shiun_robot
```
