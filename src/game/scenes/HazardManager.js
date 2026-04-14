import Phaser from 'phaser'

import {
    GAME_WIDTH,
    ROCK_VELOCITY_MAX,
    ROCK_VELOCITY_MIN_THRESHOLD,
    ROCK_SPAWN_INITIAL_Y,
    ROCK_VELOCITY_MAX_RETRIES
} from '../const/gameConfig'

export class HazardManager {
    constructor(scene) {
        this.scene = scene
        this.group = scene.physics.add.group()
    }

    spawn(playerX) {
        const midX = GAME_WIDTH / 2
        const x =
            playerX < midX ? Phaser.Math.Between(midX, GAME_WIDTH) : Phaser.Math.Between(0, midX)
        const rock = this.group.create(x, 16, 'rock')
        rock.setBounce(1)
        rock.setCollideWorldBounds(true)
        rock.setVelocity(this.getVelocity(), ROCK_SPAWN_INITIAL_Y)
    }

    clear() {
        this.group.clear(true, true)
    }

    getVelocity(attempt = 0) {
        if (attempt >= ROCK_VELOCITY_MAX_RETRIES) {
            return ROCK_VELOCITY_MIN_THRESHOLD + 1
        }
        const v = Phaser.Math.Between(-ROCK_VELOCITY_MAX, ROCK_VELOCITY_MAX)
        return v > -ROCK_VELOCITY_MIN_THRESHOLD && v < ROCK_VELOCITY_MIN_THRESHOLD
            ? this.getVelocity(attempt + 1)
            : v
    }
}
