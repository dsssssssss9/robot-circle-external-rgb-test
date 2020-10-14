input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    for (let index = 0; index <= 8; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(index - 1, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
strip.showRainbow(1, 360)
basic.forever(function () {
	
})
