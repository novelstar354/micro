/**
 * ok=0
 * 
 * no=1
 */
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    choice = 1
    basic.pause(100)
    basic.showNumber(card)
    if (previous < card) {
        basic.showNumber(card)
        basic.pause(200)
        basic.showString("win")
        pre = 0
        previous = card
    } else {
        if (card == previous) {
            basic.showNumber(card)
            basic.pause(200)
            basic.showString("draw")
            pre = 0
            previous = card
        } else {
            basic.showString("lose")
            pre = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (pre == 0) {
        card = randint(1, 13)
        if (previous == 0) {
            previous = card
            basic.showNumber(card)
            card = randint(1, 13)
        }
        basic.showNumber(previous)
        pre = 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    choice = 0
    basic.pause(100)
    basic.showNumber(card)
    if (card < previous) {
        basic.showNumber(card)
        basic.pause(200)
        basic.showString("win")
        pre = 0
        previous = card
    } else {
        if (previous == card) {
            basic.showNumber(card)
            basic.pause(200)
            basic.showString("draw")
            pre = 0
            previous = card
        } else {
            basic.showString("lose")
            pre = 0
        }
    }
})
/**
 * high=1
 * 
 * low=0
 */
let previous = 0
let pre = 0
let choice = 0
let card = 0
card = 0
choice = 33
pre = 0
previous = 0
basic.forever(function () {
	
})
