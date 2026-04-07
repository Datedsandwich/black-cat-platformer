import { platformLayouts } from '../const/levels'

export class Platforms {
    constructor(scene) {
        this.scene = scene
        this.group = this.scene.physics.add.staticGroup()
        this.init(0)
    }

    init(layoutIndex = 0) {
        this.group.clear(true, true)
        const layout = platformLayouts[layoutIndex] ?? platformLayouts[0]
        layout.forEach(({ x, y, scaleX = 1, scaleY = 1 }) => {
            const platform = this.group.create(x, y, 'ground')
            if (scaleX !== 1 || scaleY !== 1) {
                platform.setScale(scaleX, scaleY).refreshBody()
            }
        })
    }
}
