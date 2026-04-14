import { Scene } from 'phaser'

import { scenes } from '../const/scenes'

export class Preload extends Scene {
    constructor() {
        super({ key: scenes.preload })
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
        this.scene.start(scenes.title)
    }
}
