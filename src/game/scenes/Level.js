import { Scene } from 'phaser'

import { scenes } from '../const/scenes'
import { levels } from '../const/levels'
import { animations } from '../const/animations'
import { Player } from '../components/player'
import { TouchControls } from '../components/TouchControls'
import { Collectibles } from './Collectibles'
import { Platforms } from './Platforms'
import { HazardManager } from './HazardManager'

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

    constructor() {
        super({
            key: scenes.level
        })
    }

    preload() {
        this.load.image('sky', 'assets/sky.png')
        this.load.image('ground', 'assets/platform.png')
        this.load.image('coffee', 'assets/coffee.png')
        this.load.image('rock', 'assets/bomb.png')
        this.load.spritesheet('cat', 'assets/cat.png', {
            frameWidth: 48,
            frameHeight: 36,
            spacing: 10
        })
    }

    create() {
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
        this.hazards = new HazardManager(this)

        this.physics.add.collider(this.player, this.platforms.group)
        this.physics.add.collider(this.collectibles.group, this.platforms.group)
        this.physics.add.collider(this.hazards.group, this.platforms.group)
        this.physics.add.collider(this.player, this.hazards.group, this.gameOver, null, this)

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

    update() {
        this.player.update(this.touchControls.input)
        this.updateTime()
    }

    initAnimations() {
        Object.values(animations).forEach((animation) => {
            if (!this.anims.exists(animation.key)) {
                this.anims.create(animation)
            }
        })
    }

    updateTime() {
        if (!this.player.isDead) {
            this.elapsedTime = Date.now() - this.startTime
        }
        this.timeText.setText('Time: ' + Math.floor(this.elapsedTime / 1000))
    }

    updateScore(points) {
        this.score += points
        this.scoreText.setText('Score: ' + this.score)
    }

    levelClear() {
        this.roundsCleared++
        const { maxRocks } = levels[this.currentLevelIndex]

        if (this.roundsCleared >= maxRocks) {
            this.showLevelCleared()
        } else {
            this.hazards.spawn(this.player.x)
            this.collectibles.reset()
        }
    }

    showLevelCleared() {
        this.physics.pause()
        this.levelText.setText('Level Cleared!')
        this.time.delayedCall(1500, this.advanceLevel, [], this)
    }

    advanceLevel() {
        this.currentLevelIndex = (this.currentLevelIndex + 1) % levels.length
        this.roundsCleared = 0
        this.hazards.clear()
        this.platforms.init(levels[this.currentLevelIndex].platformLayout)
        this.collectibles.reset()
        this.physics.resume()
        this.displayLevelText()
    }

    displayLevelText() {
        this.levelText.setText(`Level ${this.currentLevelIndex + 1}`)
        this.time.delayedCall(1200, () => this.levelText.setText(''))
    }

    gameOver() {
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
}
