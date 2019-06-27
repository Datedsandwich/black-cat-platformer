import Phaser from 'phaser'
import Title from './scenes/Title'

import { bounds } from './const'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    physics: {
        default: 'arcade'
    },
    scene: [Title]
}

const game = new Phaser.Game(config)
