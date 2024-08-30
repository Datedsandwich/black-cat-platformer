import { Scene } from 'phaser'

import { scenes } from '../const/scenes'
import { Player } from '../components/player'
import { animations } from '../const/animations'

export class Level extends Scene {
    hazards
    platforms
    player
    collectibles
    score = 0
    scoreText

    constructor() {
        super({
            key: scenes.level
        })
    }

    collectCollectible = (player, collectible) => {
        collectible.disableBody(true, true)

        this.score += 10
        this.scoreText.setText('Score: ' + this.score)

        if (this.collectibles.countActive(true) === 0) {
            this.collectibles.children.iterate(child => {
                child.enableBody(true, child.x, 0, true, true)
            })

            const x = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

            const hazard = this.hazards.create(x, 16, 'bomb')
            hazard.setBounce(1)
            hazard.setCollideWorldBounds(true)
            hazard.setVelocity(Phaser.Math.Between(-200, 200), 20)
        }
    }

    gameOver = () => {
        this.physics.pause()

        this.score = 0

        this.player.kill()

        this.add.text(400, 300, 'Game Over', {
            fontSize: '64px',
            fill: '#000'
        })

        this.add.text(400, 356, 'Press Space to Restart', {
            fontSize: '21px',
            fill: '#000'
        })

        this.input.keyboard.once('keyup-SPACE', event => {
            this.scene.start(scenes.title)
        })
    }

    create = () => {
        this.add.image(400, 300, 'sky')

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })

        this.player = new Player(this, 100, 450)

        this.initPlatforms()
        this.initCollectibles()
        this.initAnimations()
        this.initBombs()

        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.collectibles, this.platforms)

        this.physics.add.overlap(
            this.player,
            this.collectibles,
            this.collectCollectible,
            null,
            this
        )
    }

    preload = () => {
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

    update = () => {
        this.player.update()
    }

    initBombs = () => {
        this.hazards = this.physics.add.group()

        this.physics.add.collider(this.hazards, this.platforms)

        this.physics.add.collider(this.player, this.hazards, this.gameOver, null, this)
    }

    initPlatforms = () => {
        this.platforms = this.physics.add.staticGroup()

        this.platforms
            .create(400, 568, 'ground')
            .setScale(2)
            .refreshBody()

        this.platforms.create(600, 400, 'ground')
        this.platforms.create(50, 250, 'ground')
        this.platforms.create(750, 220, 'ground')
    }

    initAnimations = () =>
        Object.values(animations).forEach(animation => this.anims.create(animation))

    initCollectibles = () => {
        this.collectibles = this.physics.add.group({
            key: 'coffee',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        })

        this.collectibles.children.iterate(function(child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })
    }
}
