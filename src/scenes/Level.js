import { Scene } from 'phaser'

import scenes from '../const/scenes'

var bombs
var cursors
var gameOver
var platforms
var player
var stars
var score = 0
var scoreText

export class Level extends Scene {
    constructor() {
        super({
            key: scenes.level
        })
    }

    speed = 160
    jumpSpeed = 500

    collectStar(player, star) {
        star.disableBody(true, true)

        score += 10
        scoreText.setText('Score: ' + score)

        if (stars.countActive(true) === 0) {
            stars.children.iterate(child => {
                child.enableBody(true, child.x, 0, true, true)
            })

            var x = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

            var bomb = bombs.create(x, 16, 'bomb')
            bomb.setBounce(1)
            bomb.setCollideWorldBounds(true)
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
        }
    }

    gameOver(player) {
        this.physics.pause()

        player.anims.play('cat_dead')

        gameOver = true
        score = 0

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
        this.initStars()
        this.initPlayer()
        this.initBombs()

        this.physics.add.collider(player, platforms)
        this.physics.add.collider(stars, platforms)

        this.physics.add.overlap(player, stars, this.collectStar, null, this)
    }

    preload() {
        this.load.image('sky', 'assets/sky.png')
        this.load.image('ground', 'assets/platform.png')
        this.load.image('star', 'assets/star.png')
        this.load.image('bomb', 'assets/bomb.png')
        this.load.spritesheet('cat', 'assets/cat.png', {
            frameWidth: 48,
            frameHeight: 48,
            spacing: 10
        })
    }

    update() {
        if (!gameOver) {
            if (cursors.left.isDown) {
                player.setVelocityX(-this.speed)

                player.anims.play('cat_walk', true)
                player.flipX = true
            } else if (cursors.right.isDown) {
                player.setVelocityX(this.speed)

                player.anims.play('cat_walk', true)
                player.flipX = false
            } else {
                player.setVelocityX(0)

                player.anims.play('cat_stand')
            }

            if (cursors.up.isDown && player.body.touching.down) {
                player.setVelocityY(-this.jumpSpeed)
            }
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
            frames: this.anims.generateFrameNumbers('cat', { frame: 5 }),
            frameRate: 20
        })
    }

    initStars() {
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        })

        stars.children.iterate(function(child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })
    }
}
