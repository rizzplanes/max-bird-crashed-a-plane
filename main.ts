function spawntwintower () {
    twin_towers = sprites.create(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 5 2 . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 6 6 f 6 6 f . . . . . 
        `, SpriteKind.Enemy)
    twin_towers.scale = 4
    twin_towers.sy = randint(1, 4)
    twin_towers.setPosition(0, 0)
    twin_towers.setVelocity(50, 10000)
    twin_towers.setStayInScreen(true)
}
function spawnbirds () {
    bird = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f . . . . . f . f f . . . f f . 
        f f . . . f f . . f f . f f . . 
        . f f . f f . . . . f f f . . . 
        . . f f f . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . f . . . f f . . . . . . . 
        . . . f f . f f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bird.setPosition(14, 15)
    bird.scale = 3.5
    bird.setVelocity(50, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let bird: Sprite = null
let twin_towers: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let _747_plane = sprites.create(img`
    ....ffffff..............
    ....ff22ccf.........cf..
    .....ffccccfff.....c4f..
    ....cc22222222ccccc44f..
    ...c9b244422222ccc442f..
    ..c99944222222222242fc..
    .c2b9992222222222222fcc.
    c221b1111b22222222cc22cf
    f2222211992222ccccccc22f
    .f22222222222c222cffffff
    ..ff2222222c442222ff....
    ....fffffffff442222fc...
    .........f2cff442222c...
    .........fccfffc2222c...
    ..........fc2ffffffff...
    ...........c2fff........
    `, SpriteKind.Player)
controller.moveSprite(_747_plane, 0, 100)
_747_plane.setPosition(120, 50)
_747_plane.setStayInScreen(true)
forever(function () {
    spawntwintower()
    pause(2000)
    spawnbirds()
})
