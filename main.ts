radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dado) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola micro:bit ")
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    dado = randint(1, 6)
    basic.showNumber(dado)
    radio.sendNumber(dado)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Target)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
let dado = 0
radio.setGroup(1)
basic.forever(function () {
	
})
