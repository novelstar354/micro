function decideAlphabet () {
    sendCharactor = charactor
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("A")
    } else if (receivedNumber == 1) {
        basic.showString("B")
    } else if (receivedNumber == 2) {
        basic.showString("C")
    } else if (receivedNumber == 3) {
        basic.showString("D")
    } else if (receivedNumber == 4) {
        basic.showString("E")
    } else if (receivedNumber == 5) {
        basic.showString("F")
    } else if (receivedNumber == 6) {
        basic.showString("G")
    } else if (receivedNumber == 7) {
        basic.showString("H")
    } else if (receivedNumber == 8) {
        basic.showString("I")
    } else if (receivedNumber == 9) {
        basic.showString("J")
    } else if (receivedNumber == 10) {
        basic.showString("K")
    } else if (receivedNumber == 11) {
        basic.showString("L")
    } else if (receivedNumber == 12) {
        basic.showString("M")
    } else if (receivedNumber == 13) {
        basic.showString("N")
    } else if (receivedNumber == 14) {
        basic.showString("O")
    } else if (receivedNumber == 15) {
        basic.showString("P")
    } else if (receivedNumber == 16) {
        basic.showString("Q")
    } else if (receivedNumber == 17) {
        basic.showString("R")
    } else if (receivedNumber == 18) {
        basic.showString("S")
    } else if (receivedNumber == 19) {
        basic.showString("T")
    } else if (receivedNumber == 20) {
        basic.showString("U")
    } else if (receivedNumber == 21) {
        basic.showString("V")
    } else if (receivedNumber == 22) {
        basic.showString("W")
    } else if (receivedNumber == 23) {
        basic.showString("X")
    } else if (receivedNumber == 24) {
        basic.showString("Y")
    } else if (receivedNumber == 25) {
        basic.showString("Z")
    } else if (receivedNumber == 26) {
        basic.showString(".")
    } else if (receivedNumber == 27) {
        basic.showString("?")
    } else if (receivedNumber == 28) {
        basic.showString("!")
    } else {
        basic.showString("Error")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (charactor != 28) {
        charactor += 1
        basic.showNumber(charactor)
    }
})
input.onButtonPressed(Button.AB, function () {
    decideAlphabet()
    radio.sendNumber(sendCharactor)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (charactor != 0) {
        charactor += -1
        basic.showNumber(charactor)
    }
})
let group = 0
let charactor = 0
let sendCharactor = 0
sendCharactor = 0
charactor = 0
for (let index = 0; index < 255; index++) {
    radio.setGroup(group)
    group += 1
}
