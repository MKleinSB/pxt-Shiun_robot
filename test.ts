// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.
basic.forever(function () {
    MiniPOW.set_offset(AnalogPin.P0, 0, AnalogPin.P1, 0, AnalogPin.P2, 0)
    MiniPOW.motion(MiniPOW.dnum.Stop)
})