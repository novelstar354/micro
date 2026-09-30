// ==========================
// サボテンを左へ移動
// ==========================
function moveCactus () {
    for (let index = 0; index < 5; index++) {
        if (cactus1 != null) {
            cactus1.change(LedSpriteProperty.X, -1)
        }
        if (cactus2 != null) {
            cactus2.change(LedSpriteProperty.X, -1)
        }
        if (cactus3 != null) {
            cactus3.change(LedSpriteProperty.X, -1)
        }
        if (cactus4 != null) {
            cactus4.change(LedSpriteProperty.X, -1)
        }
        basic.pause(speed)
        // 当たり判定
        if (player != null) {
            if (cactus1 != null && player.isTouching(cactus1)) {
                gameOver = true
            }
            if (cactus2 != null && player.isTouching(cactus2)) {
                gameOver = true
            }
            if (cactus3 != null && player.isTouching(cactus3)) {
                gameOver = true
            }
            if (cactus4 != null && player.isTouching(cactus4)) {
                gameOver = true
            }
        }
        if (gameOver) {
            return
        }
    }
    deleteCactus()
}
// ==========================
// Aボタン
// ==========================
input.onButtonPressed(Button.A, function () {
    if (!(gameStarted)) {
        basic.pause(200)
        gameStarted = true
    }
})
// ==========================
// サボテンを削除
// ==========================
function deleteCactus () {
    if (cactus1 != null) {
        cactus1.delete()
        cactus1 = null
    }
    if (cactus2 != null) {
        cactus2.delete()
        cactus2 = null
    }
    if (cactus3 != null) {
        cactus3.delete()
        cactus3 = null
    }
    if (cactus4 != null) {
        cactus4.delete()
        cactus4 = null
    }
}
// ==========================
// ジャンプ
// ==========================
function playerJump () {
    if (jumping || gameOver) {
        return
    }
    jumping = true
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(150)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(200)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(150)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    jumping = false
}
// ==========================
// A+B：ジャンプ
// ==========================
input.onButtonPressed(Button.AB, function () {
    if (gameStarted && !(gameOver)) {
        if (jumping != true) {
            playerJump()
        }
    }
})
// ==========================
// Bボタン
// ==========================
input.onButtonPressed(Button.B, function () {
    basic.pause(200)
    if (!(gameStarted)) {
        gameStarted = true
    }
})
// ==========================
// サボテンを作る
// ==========================
function makeCactus () {
    _type = randint(1, 4)
    cactus1 = game.createSprite(4, 4)
    // 横2
    if (_type == 2) {
        cactus2 = game.createSprite(3, 4)
    }
    // 縦2
    if (_type == 3) {
        cactus2 = game.createSprite(4, 3)
    }
    // 2×2
    if (_type == 4) {
        cactus2 = game.createSprite(3, 4)
        cactus3 = game.createSprite(4, 3)
        cactus4 = game.createSprite(3, 3)
    }
}
let _type = 0
let jumping = false
let gameOver = false
let gameStarted = false
let speed = 0
let cactus1: game.LedSprite = null
let cactus2: game.LedSprite = null
let cactus3: game.LedSprite = null
let cactus4: game.LedSprite = null
let player: game.LedSprite = null
speed = 160
// ==========================
// 初期化
// ==========================
gameStarted = false
gameOver = false
jumping = false
let score = 0
// ==========================
// メインゲーム
// ==========================
basic.forever(function () {
    if (gameStarted && !(gameOver)) {
        if (player == null) {
            player = game.createSprite(0, 4)
        }
        makeCactus()
        moveCactus()
        // サボテン同士の間隔
        basic.pause(500)
        // 少しずつ速くする
        if (speed > 80) {
            speed = speed - 2
        }
        score += 1
    }
    if (gameOver) {
        deleteCactus()
        if (player != null) {
            player.delete()
            player = null
        }
        gameStarted = false
        gameOver = false
        speed = 160
        basic.showNumber(score)
    }
})
