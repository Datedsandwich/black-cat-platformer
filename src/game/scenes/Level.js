import Phaser, { Scene } from 'phaser'

import { scenes } from '../const/scenes'
import { levels } from '../const/levels'
import { Player } from '../components/player'
import { animations } from '../const/animations'
import { Collectibles } from './Collectibles'
import { Platforms } from './Platforms'
import { TouchControls } from '../components/TouchControls'

export class Level extends Scene {
    hazards
    platforms
    player
    collectibles
    score = 0
    scoreText
    levelText
    currentLevelIndex = 0
    roundsCleared = 0
    startTime
    elapsedTime
    timeText
    touchControls

    getRockVelocity = () => {
        // return a value between -180 and 180 but not between -30 and 30
        const v = Phaser.Math.Between(-180, 180)
        if (v > -30 && v < 30) {
            return this.getRockVelocity()
        }
        return v
    }

    constructor() {
        super({
            key: scenes.level
        })
    }

    gameOver = () => {
        this.levelText.setText('')
        this.physics.pause()
        this.player.kill()

        this.add
            .text(400, 300, 'Game Over', {
                fontSize: '64px',
                fill: '#000'
            })
            .setOrigin(0.5)

        this.add
            .text(400, 356, 'Press Space or tap to restart', {
                fontSize: '21px',
                fill: '#000'
            })
            .setOrigin(0.5)

        this.input.keyboard.once('keyup-SPACE', () => {
            this.scene.start(scenes.title)
        })

        this.input.once('pointerup', () => {
            this.scene.start(scenes.title)
        })
    }

    create = () => {
        this.add.image(400, 300, 'sky')

        this.currentLevelIndex = 0
        this.roundsCleared = 0
        this.score = 0
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
        this.levelText = this.add
            .text(400, 300, '', { fontSize: '64px', fill: '#000' })
            .setOrigin(0.5)

        this.startTime = Date.now()
        this.elapsedTime = 0
        this.timeText = this.add.text(600, 16, 'Time: 0', { fontSize: '32px', fill: '#000' })

        this.player = new Player(this, 100, 450)

        this.initAnimations()
        this.collectibles = new Collectibles(this)
        this.platforms = new Platforms(this)
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

        this.touchControls = new TouchControls(this)

        this.displayLevelText()
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

    updateTime = () => {
        if (!this.player.isDead) {
            this.elapsedTime = Date.now() - this.startTime
        }
        this.timeText.setText('Time: ' + Math.floor(this.elapsedTime / 1000))
    }

    update = () => {
        this.player.update(this.touchControls.input)
        this.updateTime()
    }

    initBombs = () => {
        this.hazards = this.physics.add.group()
        this.physics.add.collider(this.hazards, this.platforms.group)
        this.physics.add.collider(this.player, this.hazards, this.gameOver, null, this)
    }

    initAnimations = () => {
        Object.values(animations).forEach((animation) => {
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
        this.roundsCleared++
        const { maxRocks } = levels[this.currentLevelIndex]

        if (this.roundsCleared >= maxRocks) {
            this.showLevelCleared()
        } else {
            this.spawnRock()
            this.collectibles.reset()
        }
    }

    spawnRock = () => {
        const x = this.player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)
        const hazard = this.hazards.create(x, 16, 'bomb')
        hazard.setBounce(1)
        hazard.setCollideWorldBounds(true)
        hazard.setVelocity(this.getRockVelocity(), 20)
    }

    showLevelCleared = () => {
        this.physics.pause()
        this.levelText.setText('Level Cleared!')
        this.time.delayedCall(1500, this.advanceLevel)
    }

    advanceLevel = () => {
        this.currentLevelIndex = (this.currentLevelIndex + 1) % levels.length
        this.roundsCleared = 0
        this.hazards.clear(true, true)
        this.platforms.init(levels[this.currentLevelIndex].platformLayout)
        this.collectibles.reset()
        this.physics.resume()
        this.displayLevelText()
    }

    displayLevelText = () => {
        this.levelText.setText(`Level ${this.currentLevelIndex + 1}`)
        this.time.delayedCall(1200, () => this.levelText.setText(''))
    }
}
