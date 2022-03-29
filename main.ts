basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.lightLevel())
        basic.pause(100)
    }
})
