import { Scene } from 'phaser'

import scenes from '../const/scenes'

var bombs
var cursors
var gameOver
var platforms
var player
var coffees
var score = 0
var scoreText

export class Level extends Scene {
    constructor() {
        super({
            key: scenes.level
        })
    }

    speed = 240
    jumpSpeed = 500

    collectcoffee(player, coffee) {
        coffee.disableBody(true, true)

        score += 10
        scoreText.setText('Score: ' + score)

        if (coffees.countActive(true) === 0) {
            coffees.children.iterate(child => {
                child.enableBody(true, child.x, 0, true, true)
            })

            var x = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

            var bomb = bombs.create(x, 16, 'bomb')
            bomb.setBounce(1)
            bomb.setCollideWorldBounds(true)
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
        }
    }

    gameOver() {
        this.physics.pause()

        gameOver = true
        score = 0

        player.anims.play('cat_dead')

        this.add.text(400, 300, 'Game Over', {
            fontSize: '64px',
            fill: '#000'
        })

        this.add.text(400, 356, 'Press Space to Restart', {
            fontSize: '21px',
            fill: '#000'
        })

        this.input.keyboard.once('keyup_SPACE', event => {
            this.scene.start(scenes.title)
        })
    }

    create() {
        gameOver = false
        cursors = this.input.keyboard.createCursorKeys()
        this.add.image(400, 300, 'sky')

        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })

        this.initPlatforms()
        this.initCoffees()
        this.initPlayer()
        this.initBombs()

        this.physics.add.collider(player, platforms)
        this.physics.add.collider(coffees, platforms)

        this.physics.add.overlap(player, coffees, this.collectcoffee, null, this)
    }

    preload() {
        this.load.image('sky', 'assets/sky.png')
        this.load.image('ground', 'assets/platform.png')
        this.load.image('coffee', 'assets/coffee.png')
        this.load.image('bomb', 'assets/bomb.png')
        this.load.spritesheet('cat', 'assets/cat.png', {
            frameWidth: 48,
            frameHeight: 36,
            spacing: 10
        })
    }

    update() {
        if (gameOver) {
            return
        }

        if (cursors.left.isDown) {
            player.setVelocityX(-this.speed)
            player.body.touching.down && player.anims.play('cat_walk', true)
            player.flipX = true
        } else if (cursors.right.isDown) {
            player.setVelocityX(this.speed)
            player.body.touching.down && player.anims.play('cat_walk', true)
            player.flipX = false
        } else {
            player.setVelocityX(0)
            player.body.touching.down && player.anims.play('cat_stand')
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-this.jumpSpeed)
            player.anims.play('cat_jump')
        }
    }

    initBombs() {
        bombs = this.physics.add.group()

        this.physics.add.collider(bombs, platforms)

        this.physics.add.collider(player, bombs, this.gameOver, null, this)
    }

    initPlatforms() {
        platforms = this.physics.add.staticGroup()

        platforms
            .create(400, 568, 'ground')
            .setScale(2)
            .refreshBody()

        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')
    }

    initPlayer() {
        player = this.physics.add.sprite(100, 450, 'cat')

        player.setBounce(0.2)
        player.setCollideWorldBounds(true)
        player.body.setGravityY(300)

        this.anims.create({
            key: 'cat_stand',
            frames: [{ key: 'cat', frame: 0 }],
            frameRate: 20
        })

        this.anims.create({
            key: 'cat_walk',
            frames: this.anims.generateFrameNumbers('cat', { start: 1, end: 4 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'cat_dead',
            frames: [{ key: 'cat', frame: 5 }],
            frameRate: 20
        })

        this.anims.create({
            key: 'cat_jump',
            frames: [{ key: 'cat', frame: 1 }],
            frameRate: 20
        })
    }

    initCoffees() {
        coffees = this.physics.add.group({
            key: 'coffee',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        })

        coffees.children.iterate(function(child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })
    }
}
