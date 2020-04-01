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
1. Define the offset value for 4-servo motors.  (P0 / P1 /P2)
      
2. Assign the motion to the robot. 

![image](MiniPOW_example.png)

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
