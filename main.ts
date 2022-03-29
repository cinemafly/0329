basic.forever(function () {
    if (input.lightLevel() < 15) {
        led.setBrightness(255)
        basic.showIcon(IconNames.Heart)
    } else {
        if (input.lightLevel() < 50) {
            led.setBrightness(100)
            basic.showIcon(IconNames.Square)
        } else {
            led.setBrightness(20)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
})
