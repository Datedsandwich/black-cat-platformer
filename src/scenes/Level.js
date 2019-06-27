import { Scene } from 'phaser'

import scenes from '../const/scenes'

var cursors
var platforms
var player

export class Level extends Scene {
    constructor() {
        super({
            key: scenes.level
        })
    }

    create() {
        this.add.image(400, 300, 'sky')

        platforms = this.physics.add.staticGroup()

        platforms
            .create(400, 568, 'ground')
            .setScale(2)
            .refreshBody()

        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')

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

        this.physics.add.collider(player, platforms)

        cursors = this.input.keyboard.createCursorKeys()
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
        if (cursors.left.isDown) {
            player.setVelocityX(-160)

            player.anims.play('cat_walk', true)
            player.flipX = true
        } else if (cursors.right.isDown) {
            player.setVelocityX(160)

            player.anims.play('cat_walk', true)
            player.flipX = false
        } else {
            player.setVelocityX(0)

            player.anims.play('cat_stand')
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-430)
        }
    }
}
