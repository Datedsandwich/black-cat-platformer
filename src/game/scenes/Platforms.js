export class Platforms {
    constructor(scene) {
        this.scene = scene
        this.group = this.scene.physics.add.staticGroup()
        this.init()
    }

    init(level = 1) {
        this.clearPlatforms()

        switch (level) {
            case 1:
                // ground
                this.group.create(400, 568, 'ground').setScale(2).refreshBody()
                // lower level
                this.group.create(612, 400, 'ground')
                // mid level
                this.group.create(50, 250, 'ground')
                // upper level
                this.group.create(750, 220, 'ground')
                break
            default:
                break
        }
    }

    clearPlatforms() {
        this.group.clear(true, true)
    }
}
