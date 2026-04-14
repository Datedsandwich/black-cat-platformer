export class HelpPanel {
    constructor(scene) {
        this.container = this.create(scene)
    }

    create(scene) {
        const { width, height } = scene.cameras.main
        const container = scene.add.container(width / 2, height / 2)

        const pw = 480
        const ph = 300
        const left = -pw / 2
        const top = -ph / 2

        const g = scene.add.graphics()

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

        container.add(scene.add.text(0, top + 24, 'HOW TO PLAY', heading).setOrigin(0.5, 0))

        container.add(
            scene.add
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

        container.add(scene.add.text(0, top + 185, 'CONTROLS', heading).setOrigin(0.5, 0))

        container.add(
            scene.add
                .text(
                    left + 24,
                    top + 215,
                    ['Arrow Left / Right     Move', 'Arrow Up               Jump'],
                    body
                )
                .setOrigin(0, 0)
        )

        container.add(scene.add.text(0, top + ph - 22, 'Press H to close', dim).setOrigin(0.5, 1))

        return container
    }

    get visible() {
        return this.container.visible
    }

    setVisible(value) {
        this.container.setVisible(value)
        return this
    }

    toggle() {
        this.container.setVisible(!this.container.visible)
    }
}
