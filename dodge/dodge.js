function appearEnemy () {
    basic.pause(100)
    quantity = randint(1, 2)
    locate = randint(0, 4)
    locate2 = randint(0, 4)
    speed = randint(80, 120)
    wait = randint(150, 200)
    start = 0
    if (quantity == 1) {
        enemy1 = game.createSprite(4, locate)
        basic.pause(wait)
        for (let index = 0; index < 4; index++) {
            enemy1.change(LedSpriteProperty.X, -1)
            basic.pause(speed)
            deathCheck()
        }
        enemy1.delete()
        start = 1
        if (gameover == 0) {
            score += 3
        }
    } else if (quantity == 2) {
        enemy1 = game.createSprite(4, locate)
        enemy2 = game.createSprite(4, locate2)
        basic.pause(wait)
        for (let index = 0; index < 4; index++) {
            enemy1.change(LedSpriteProperty.X, -1)
            enemy2.change(LedSpriteProperty.X, -1)
            basic.pause(speed)
            deathCheck()
        }
        enemy1.delete()
        enemy2.delete()
        start = 1
        if (gameover == 0) {
            score += 5
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (gameover == 1) {
        basic.clearScreen()
        finish = 1
        pushCheck = 0
    } else {
        if (スプライト.get(LedSpriteProperty.Y) == 0) {
            スプライト.delete()
            スプライト = game.createSprite(0, 1)
        } else {
            スプライト.change(LedSpriteProperty.Y, 1)
        }
    }
})
function end () {
    enemy2.delete()
    enemy1.delete()
    スプライト.delete()
    while (finish != 1) {
        basic.showNumber(score)
        basic.clearScreen()
    }
}
input.onGesture(Gesture.Shake, function () {
    if (pushCheck == 0) {
        reset()
    } else {
        start = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (pushCheck == 0) {
        reset()
        pushCheck = 1
    } else {
        start = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameover == 1) {
        basic.clearScreen()
        finish = 1
        pushCheck = 0
    } else {
        if (スプライト.get(LedSpriteProperty.Y) == 4) {
            スプライト.delete()
            スプライト = game.createSprite(0, 3)
        } else {
            スプライト.change(LedSpriteProperty.Y, -1)
        }
    }
})
function reset () {
    スプライト = game.createSprite(0, 2)
    start = 0
    enemy2 = game.createSprite(5, 5)
    enemy1 = game.createSprite(5, 5)
    gameover = 0
    speed = 0
    wait = 0
}
function deathCheck () {
    if (quantity == 1) {
        if (スプライト.get(LedSpriteProperty.Y) == enemy1.get(LedSpriteProperty.Y)) {
            if (スプライト.get(LedSpriteProperty.X) == enemy1.get(LedSpriteProperty.X)) {
                gameover = 1
            }
        } else {
            gameover = 0
            if (enemy1.get(LedSpriteProperty.X) == 0) {
                enemy1.delete()
            }
        }
    } else if (quantity == 2) {
        if (スプライト.get(LedSpriteProperty.Y) == enemy1.get(LedSpriteProperty.Y) || スプライト.get(LedSpriteProperty.Y) == enemy2.get(LedSpriteProperty.Y)) {
            if (スプライト.get(LedSpriteProperty.X) == enemy1.get(LedSpriteProperty.X) || スプライト.get(LedSpriteProperty.X) == enemy2.get(LedSpriteProperty.X)) {
                gameover = 1
            }
        } else {
            gameover = 0
            if (enemy1.get(LedSpriteProperty.X) == 0 && enemy2.get(LedSpriteProperty.X) == 0) {
                enemy1.delete()
                enemy2.delete()
            }
        }
    }
}
let スプライト: game.LedSprite = null
let finish = 0
let enemy2: game.LedSprite = null
let score = 0
let gameover = 0
let enemy1: game.LedSprite = null
let start = 0
let wait = 0
let speed = 0
let locate2 = 0
let locate = 0
let quantity = 0
let pushCheck = 0
pushCheck = 0
basic.forever(function () {
    if (finish == 0) {
        if (gameover == 1) {
            end()
        } else {
            if (start == 1) {
                appearEnemy()
            }
        }
    }
})
