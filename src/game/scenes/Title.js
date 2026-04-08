import { Scene } from 'phaser'

import { scenes } from '../const/scenes'

export class Title extends Scene {
    constructor() {
        super({
            key: scenes.title
        })
    }

    create() {
        const width = this.cameras.main.width
        const height = this.cameras.main.height

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

        const helpPanel = this.createHelpPanel(width / 2, height / 2)
        helpPanel.setVisible(false)

        this.input.keyboard.on('keydown-H', () => {
            helpPanel.setVisible(!helpPanel.visible)
        })

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

    createHelpPanel(cx, cy) {
        const container = this.add.container(cx, cy)

        const pw = 480
        const ph = 300
        const left = -pw / 2
        const top = -ph / 2

        // Background and retro double border
        const g = this.add.graphics()

        g.fillStyle(0x000033, 0.97)
        g.fillRect(left, top, pw, ph)

        // Outer border — white
        g.lineStyle(4, 0xffffff, 1)
        g.strokeRect(left, top, pw, ph)

        // Inner border — dark blue, inset by 8px
        g.lineStyle(2, 0x4444aa, 1)
        g.strokeRect(left + 8, top + 8, pw - 16, ph - 16)

        container.add(g)

        const heading = { font: 'bold 16px monospace', fill: '#ffff00' }
        const body = { font: '14px monospace', fill: '#ffffff', lineSpacing: 6 }
        const dim = { font: '12px monospace', fill: '#888888' }

        container.add(this.add.text(0, top + 24, 'HOW TO PLAY', heading).setOrigin(0.5, 0))

        container.add(
            this.add
                .text(
                    left + 24,
                    top + 60,
                    [
                        'Collect all the coffees to clear each round.',
                        'A new rock spawns every round — survive them',
                        'all to clear the level and move on.',
                        '',
                        'How many rocks can you handle...?'
                    ],
                    body
                )
                .setOrigin(0, 0)
        )

        container.add(this.add.text(0, top + 185, 'CONTROLS', heading).setOrigin(0.5, 0))

        container.add(
            this.add
                .text(
                    left + 24,
                    top + 215,
                    ['Arrow Left / Right     Move', 'Arrow Up               Jump'],
                    body
                )
                .setOrigin(0, 0)
        )

        container.add(this.add.text(0, top + ph - 22, 'Press H to close', dim).setOrigin(0.5, 1))

        return container
    }
}
