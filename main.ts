input.onButtonPressed(Button.A, function () {
    coord_y += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(coord_x * 10 + coord_y)
    radio.sendString("Richy")
    coord_x = 0
    coord_y = 0
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    coord_x += 1
})
let coord_x = 0
let coord_y = 0
radio.setGroup(1)
