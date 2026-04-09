import Phaser from 'phaser'

import { COLLECTIBLE_COUNT, COLLECTIBLE_START_X, COLLECTIBLE_STEP_X } from '../const/gameConfig'

export class Collectibles {
    constructor(scene) {
        this.scene = scene
        this.group = this.scene.physics.add.group({
            key: 'coffee',
            repeat: COLLECTIBLE_COUNT - 1,
            setXY: { x: COLLECTIBLE_START_X, y: 0, stepX: COLLECTIBLE_STEP_X }
        })
        this.init()
    }

    init() {
        this.group.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })
    }

    reset() {
        this.group.children.iterate((child) => {
            child.enableBody(true, child.x, 0, true, true)
        })
    }

    collect = (player, collectible) => {
        collectible.disableBody(true, true)
        this.scene.updateScore(10)
        if (this.group.countActive(true) === 0) {
            this.scene.levelClear()
        }
    }
}
