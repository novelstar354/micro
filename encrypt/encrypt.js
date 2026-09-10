function decideAlphabet () {
    message1 = charactor + 7
    sendCharactor = message1 * 3
}
radio.onReceivedNumber(function (receivedNumber) {
    message2 = receivedNumber / 3
    message3 = message2 - 7
    if (message3 == 0) {
        basic.showString("A")
    } else if (message3 == 1) {
        basic.showString("B")
    } else if (message3 == 2) {
        basic.showString("C")
    } else if (message3 == 3) {
        basic.showString("D")
    } else if (message3 == 4) {
        basic.showString("E")
    } else if (message3 == 5) {
        basic.showString("F")
    } else if (message3 == 6) {
        basic.showString("G")
    } else if (message3 == 7) {
        basic.showString("H")
    } else if (message3 == 8) {
        basic.showString("I")
    } else if (message3 == 9) {
        basic.showString("J")
    } else if (message3 == 10) {
        basic.showString("K")
    } else if (message3 == 11) {
        basic.showString("L")
    } else if (message3 == 12) {
        basic.showString("M")
    } else if (message3 == 13) {
        basic.showString("N")
    } else if (message3 == 14) {
        basic.showString("O")
    } else if (message3 == 15) {
        basic.showString("P")
    } else if (message3 == 16) {
        basic.showString("Q")
    } else if (message3 == 17) {
        basic.showString("R")
    } else if (message3 == 18) {
        basic.showString("S")
    } else if (message3 == 19) {
        basic.showString("T")
    } else if (message3 == 20) {
        basic.showString("U")
    } else if (message3 == 21) {
        basic.showString("V")
    } else if (message3 == 22) {
        basic.showString("W")
    } else if (message3 == 23) {
        basic.showString("X")
    } else if (message3 == 24) {
        basic.showString("Y")
    } else if (message3 == 25) {
        basic.showString("Z")
    } else if (message3 == 26) {
        basic.showString(".")
    } else if (message3 == 27) {
        basic.showString("?")
    } else if (message3 == 28) {
        basic.showString("!")
    } else if (message3 == 29) {
        basic.showString(" ")
    } else if (message3 == 30) {
        basic.showString("-")
    } else if (message3 == 31) {
        basic.showString("0")
    } else if (message3 == 32) {
        basic.showString("1")
    } else if (message3 == 33) {
        basic.showString("2")
    } else if (message3 == 34) {
        basic.showString("3")
    } else if (message3 == 35) {
        basic.showString("4")
    } else if (message3 == 36) {
        basic.showString("5")
    } else if (message3 == 37) {
        basic.showString("6")
    } else if (message3 == 38) {
        basic.showString("7")
    } else if (message3 == 39) {
        basic.showString("8")
    } else if (message3 == 40) {
        basic.showString("9")
    } else if (message3 == 41) {
        basic.showString("Star")
    } else {
        basic.showString("Error")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (charactor != 41) {
        charactor += 1
        basic.showNumber(charactor)
    }
    shakeMode = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (shakeMode == 0) {
        if (charactor <= 31) {
            charactor += 10
            basic.showNumber(charactor)
        }
    } else if (shakeMode == 1) {
        if (charactor >= 11) {
            charactor += -10
            basic.showNumber(charactor)
        }
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
    shakeMode = 1
})
let group = 0
let shakeMode = 0
let message3 = 0
let message2 = 0
let message1 = 0
let charactor = 0
let sendCharactor = 0
sendCharactor = 0
charactor = 0
message1 = 0
message2 = 0
message3 = 0
shakeMode = 0
for (let index = 0; index < 255; index++) {
    radio.setGroup(group)
    group += 1
}
