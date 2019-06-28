import Phaser from 'phaser'
import { Title } from './scenes/Title'
import { Level } from './scenes/Level'

export const config = {
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
