import Phaser from 'phaser'

import { animations } from '../const/animations'

export class Player extends Phaser.Physics.Arcade.Sprite {
    cursors

    isDead = false

    speed = 240
    jumpSpeed = 500

    constructor(scene, x, y) {
        super(scene, x, y, 'cat')

        this.isDead = false

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setBounce(0.2)
        this.setCollideWorldBounds(true)
        this.body.setGravityY(300)

        this.cursors = scene.input.keyboard.createCursorKeys()
    }

    update(externalInput = {}) {
        if (this.isDead) {
            return
        }

        const left = this.cursors.left.isDown || !!externalInput.left
        const right = this.cursors.right.isDown || !!externalInput.right
        const up = this.cursors.up.isDown || !!externalInput.up

        if (left) {
            this.setVelocityX(-this.speed)
            if (this.body.touching.down) {
                this.anims.play(animations.cat_walk.key, true)
            }
            this.flipX = true
        } else if (right) {
            this.setVelocityX(this.speed)
            if (this.body.touching.down) {
                this.anims.play(animations.cat_walk.key, true)
            }
            this.flipX = false
        } else {
            this.setVelocityX(0)
            if (this.body.touching.down) {
                this.anims.play(animations.cat_stand.key)
            }
        }

        if (up && this.body.touching.down) {
            this.setVelocityY(-this.jumpSpeed)
            this.anims.play(animations.cat_jump.key)
        }
    }

    kill() {
        this.isDead = true
        this.anims.play(animations.cat_dead.key)
    }
}
