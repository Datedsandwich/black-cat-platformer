import Phaser from 'phaser'

export class Player extends Phaser.Physics.Arcade.Sprite {
    cursors

    isDead = false

    speed = 240
    jumpSpeed = 500

    constructor(scene, x, y) {
        super(scene, x, y, 'cat')

        this.setPosition(x, y)
        this.isDead = false

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setBounce(0.2)
        this.setCollideWorldBounds(true)
        this.body.setGravityY(300)

        this.cursors = scene.input.keyboard.createCursorKeys()
    }

    update() {
        if (this.isDead) {
            return
        }

        if (this.cursors.left.isDown) {
            this.setVelocityX(-this.speed)
            this.body.touching.down && this.anims.play('cat_walk', true)
            this.flipX = true
        } else if (this.cursors.right.isDown) {
            this.setVelocityX(this.speed)
            this.body.touching.down && this.anims.play('cat_walk', true)
            this.flipX = false
        } else {
            this.setVelocityX(0)
            this.body.touching.down && this.anims.play('cat_stand')
        }

        if (this.cursors.up.isDown && this.body.touching.down) {
            this.setVelocityY(-this.jumpSpeed)
            this.anims.play('cat_jump')
        }
    }

    kill() {
        this.isDead = true
        this.anims.play('cat_dead')
    }
}
