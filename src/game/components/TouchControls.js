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
        const touchSize = 68
        const visibleHeight = 40
        const pad = 16

        const y = height - pad - touchSize / 2

        this.createButton(scene, pad + touchSize / 2, y, touchSize, visibleHeight, '←', 'left')
        this.createButton(
            scene,
            pad + touchSize * 1.5 + 8,
            y,
            touchSize,
            visibleHeight,
            '→',
            'right'
        )
        this.createButton(
            scene,
            width - pad - touchSize / 2,
            y,
            touchSize,
            visibleHeight,
            '↑',
            'up'
        )
    }

    createButton(scene, x, y, touchSize, visibleHeight, label, key) {
        const touchHalf = touchSize / 2

        // Visible area is bottom-aligned within the touch zone
        const visibleTop = y + touchHalf - visibleHeight

        const g = scene.add.graphics().setDepth(10)

        // Gradient: transparent at top, semi-opaque at bottom
        g.fillGradientStyle(0x000033, 0x000033, 0x000033, 0x000033, 0, 0, 0.8, 0.8)
        g.fillRect(x - touchHalf, visibleTop, touchSize, visibleHeight)

        // Retro double border
        g.lineStyle(2, 0xffffff, 0.6)
        g.strokeRect(x - touchHalf, visibleTop, touchSize, visibleHeight)
        g.lineStyle(1, 0x4444aa, 0.5)
        g.strokeRect(x - touchHalf + 5, visibleTop + 5, touchSize - 10, visibleHeight - 10)

        scene.add
            .text(x, visibleTop + visibleHeight / 2, label, {
                font: '22px monospace',
                fill: '#ffff00'
            })
            .setOrigin(0.5)
            .setAlpha(0.8)
            .setDepth(11)

        // Full-size invisible touch zone extends above the visible button
        const zone = scene.add.zone(x, y, touchSize, touchSize).setInteractive().setDepth(12)
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
