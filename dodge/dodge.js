function appearEnemy () {
    basic.pause(100)
    quantity = randint(1, 2)
    locate = randint(0, 4)
    start = 0
    if (quantity == 1) {
        enemy1 = game.createSprite(4, locate)
        basic.pause(300)
        for (let index = 0; index < 4; index++) {
            enemy1.change(LedSpriteProperty.X, -1)
            basic.pause(120)
        }
        enemy1.delete()
        start = 1
        score += 3
    } else if (quantity == 2) {
        enemy1 = game.createSprite(4, locate)
        locate2 = randint(0, 4)
        enemy2 = game.createSprite(4, locate)
        basic.pause(500)
        for (let index = 0; index < 4; index++) {
            enemy1.change(LedSpriteProperty.X, -1)
            enemy2.change(LedSpriteProperty.X, -1)
            basic.pause(200)
        }
        enemy1.delete()
        enemy2.delete()
        start = 1
        score += 5
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    if (スプライト.get(LedSpriteProperty.Y) == 0) {
        スプライト.delete()
        スプライト = game.createSprite(0, 1)
    } else {
        スプライト.change(LedSpriteProperty.Y, 1)
    }
})
function end () {
    enemy2.delete()
    enemy1.delete()
    スプライト.delete()
    basic.showNumber(score)
    finish = 1
}
input.onButtonPressed(Button.AB, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    if (スプライト.get(LedSpriteProperty.Y) == 4) {
        スプライト.delete()
        スプライト = game.createSprite(0, 3)
    } else {
        スプライト.change(LedSpriteProperty.Y, -1)
    }
})
function deathCheck () {
    if (quantity == 1) {
        if (スプライト.get(LedSpriteProperty.Y) == enemy1.get(LedSpriteProperty.Y)) {
            gameover = 1
        } else {
            gameover = 0
            enemy1.delete()
        }
    } else if (quantity == 2) {
        if (0 == enemy1.get(LedSpriteProperty.Y) || スプライト.get(LedSpriteProperty.Y) == enemy2.get(LedSpriteProperty.Y)) {
            gameover = 1
        } else {
            gameover = 0
            enemy1.delete()
            enemy2.delete()
        }
    } else {
    	
    }
}
let finish = 0
let locate2 = 0
let score = 0
let locate = 0
let quantity = 0
let gameover = 0
let enemy1: game.LedSprite = null
let enemy2: game.LedSprite = null
let start = 0
let スプライト: game.LedSprite = null
スプライト = game.createSprite(0, 2)
start = 0
enemy2 = game.createSprite(5, 5)
enemy1 = game.createSprite(5, 5)
gameover = 0
basic.forever(function () {
    if (finish == 0) {
        if (gameover == 1) {
            end()
        } else {
            if (start == 1) {
                appearEnemy()
                deathCheck()
            }
        }
    }
})
