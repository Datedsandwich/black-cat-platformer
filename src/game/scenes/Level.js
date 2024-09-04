import { Scene } from 'phaser'

import { scenes } from '../const/scenes'
import { Player } from '../components/player'
import { animations } from '../const/animations'
import { Collectibles } from './Collectibles'
import { Platforms } from './Platforms'

export class Level extends Scene {
    hazards
    platforms
    player
    collectibles
    score
    scoreText
    clearedLevels
    levelText

    constructor() {
        super({
            key: scenes.level
        })
    }

    gameOver = () => {
        this.levelText.setText('')
        this.physics.pause()
        this.player.kill()

        const gameOverText = this.add.text(400, 300, 'Game Over', {
            fontSize: '64px',
            fill: '#000'
        })
        gameOverText.setOrigin(0.5, 0.5)
        const restartText = this.add.text(400, 356, 'Press Space to Restart', {
            fontSize: '21px',
            fill: '#000'
        })
        restartText.setOrigin(0.5, 0.5)
        this.input.keyboard.once('keyup-SPACE', (event) => {
            this.scene.restart(scenes.title)
        })
    }

    create = () => {
        this.add.image(400, 300, 'sky')

        this.clearedLevels = 0
        this.score = 0
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
        this.displayLevelText()
        this.player = new Player(this, 100, 450)

        this.initAnimations()
        this.collectibles = new Collectibles(this)
        this.platforms = new Platforms(this)
        // must be initiated after platforms to set up the physics
        this.initBombs()

        this.physics.add.collider(this.player, this.platforms.group)
        this.physics.add.collider(this.collectibles.group, this.platforms.group)

        this.physics.add.overlap(
            this.player,
            this.collectibles.group,
            this.collectibles.collect,
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
        this.physics.add.collider(this.hazards, this.platforms.group)
        this.physics.add.collider(this.player, this.hazards, this.gameOver, null, this)
    }

    initAnimations = () => {
        Object.values(animations).forEach((animation) => {
            // Animations are globally scoped, so check if it exists first
            if (!this.anims.exists(animation.key)) {
                this.anims.create(animation)
            }
        })
    }

    updateScore = (points) => {
        this.score += points
        this.scoreText.setText('Score: ' + this.score)
    }

    levelClear = () => {
        this.clearedLevels++
        this.displayLevelText()
        if (this.clearedLevels === 9) {
            this.physics.pause()
            this.hazards.clear(true, true)
            this.platforms.init(2)
            setTimeout(() => {
                this.physics.resume()
                this.collectibles.reset()
            }, 2000)
        } else {
            const x =
                this.player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)
            const hazard = this.hazards.create(x, 16, 'bomb')
            hazard.setBounce(1)
            hazard.setCollideWorldBounds(true)
            hazard.setVelocity(Phaser.Math.Between(-200, 200), 20)
            this.collectibles.reset()
        }
    }

    displayLevelText = () => {
        if (this.clearedLevels === 0) {
            this.levelText = this.add.text(400, 300, 'Level ' + this.clearedLevels, {
                fontSize: '64px',
                fill: '#000'
            })
            this.levelText.setOrigin(0.5, 0.5)
        } else {
            this.levelText.setText('Level ' + this.clearedLevels)
        }

        setTimeout(() => {
            this.levelText.setText('')
        }, 1200)
    }
}
