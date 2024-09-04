export class Collectibles {
    constructor(scene) {
        this.scene = scene
        this.group = this.scene.physics.add.group({
            key: 'coffee',
            repeat: 11,
            setXY: { x: 20, y: 0, stepX: 69 }
        })
        this.init()
    }

    init() {
        this.group.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })
    }

    reset() {
        if (this.group.countActive(true) === 0) {
            this.group.children.iterate((child) => {
                child.enableBody(true, child.x, 0, true, true)
            })
        }
    }

    collect = (player, collectible) => {
        collectible.disableBody(true, true)
        this.scene.updateScore(10)
        if (this.group.countActive(true) === 0) {
            this.scene.levelClear()
        }
    }
}
