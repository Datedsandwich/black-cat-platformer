import { Scene } from 'phaser'

import { scenes } from '../const/scenes'
import { HelpPanel } from '../components/HelpPanel'

export class Title extends Scene {
    constructor() {
        super({
            key: scenes.title
        })
    }

    create() {
        const { width, height } = this.cameras.main

        this.make
            .text({
                x: width / 2,
                y: height / 2 - 60,
                text: 'Super BlackCat',
                style: { font: '20px monospace', fill: '#ffffff' }
            })
            .setOrigin(0.5)

        this.make
            .text({
                x: width / 2,
                y: height / 2 - 20,
                text: 'Press SPACE to play',
                style: { font: '20px monospace', fill: '#ffffff' }
            })
            .setOrigin(0.5)

        this.make
            .text({
                x: width / 2,
                y: height / 2 + 20,
                text: 'Press H for help',
                style: { font: '14px monospace', fill: '#aaaaaa' }
            })
            .setOrigin(0.5)

        const helpPanel = new HelpPanel(this)
        helpPanel.setVisible(false)

        this.input.keyboard.on('keydown-H', () => helpPanel.toggle())

        this.input.keyboard.on('keydown-SPACE', () => {
            if (!helpPanel.visible) {
                this.scene.start(scenes.level)
            }
        })

        this.input.keyboard.on('keydown-ENTER', () => {
            if (!helpPanel.visible) {
                this.scene.start(scenes.level)
            }
        })

        this.input.on('pointerup', () => {
            if (helpPanel.visible) {
                helpPanel.setVisible(false)
            } else {
                this.scene.start(scenes.level)
            }
        })
    }
}
