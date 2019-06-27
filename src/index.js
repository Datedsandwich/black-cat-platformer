import Phaser from 'phaser'

import { bounds } from './const'
import { Level } from './scenes/Level'
import { Title } from './scenes/Title'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Title, Level]
}

const game = new Phaser.Game(config)
