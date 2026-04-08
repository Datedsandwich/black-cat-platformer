export class TouchControls {
    input = { left: false, right: false, up: false }

    constructor(scene) {
        if (!scene.sys.game.device.input.touch) return
        // Support up to 3 simultaneous touch points (e.g. left + right + jump)
        scene.input.addPointer(2)
        this.createButtons(scene)
    }

    createButtons(scene) {
        const { width, height } = scene.cameras.main
        const size = 68
        const pad = 16

        this.createButton(scene, pad + size / 2, height - pad - size / 2, size, '←', 'left')
        this.createButton(scene, pad + size * 1.5 + 8, height - pad - size / 2, size, '→', 'right')
        this.createButton(scene, width - pad - size / 2, height - pad - size / 2, size, '↑', 'up')
    }

    createButton(scene, x, y, size, label, key) {
        const half = size / 2

        const g = scene.add.graphics().setDepth(10)
        g.fillStyle(0x000033, 0.85)
        g.fillRect(x - half, y - half, size, size)
        g.lineStyle(3, 0xffffff, 1)
        g.strokeRect(x - half, y - half, size, size)
        g.lineStyle(1, 0x4444aa, 1)
        g.strokeRect(x - half + 6, y - half + 6, size - 12, size - 12)

        scene.add
            .text(x, y, label, { font: '26px monospace', fill: '#ffff00' })
            .setOrigin(0.5)
            .setDepth(11)

        const zone = scene.add.zone(x, y, size, size).setInteractive().setDepth(12)
        zone.on('pointerdown', () => {
            this.input[key] = true
        })
        zone.on('pointerup', () => {
            this.input[key] = false
        })
        zone.on('pointerout', () => {
            this.input[key] = false
        })
    }
}
