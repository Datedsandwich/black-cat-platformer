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
                this.level1()
                break
            case 2:
                this.level2()
                break
            default:
                break
        }
    }

    clearPlatforms() {
        this.group.clear(true, true)
    }

    level1 = () => {
        // ground
        this.group.create(400, 568, 'ground').setScale(2).refreshBody()
        // lower level
        this.group.create(612, 400, 'ground')
        // mid level
        this.group.create(50, 250, 'ground')
        // upper level
        this.group.create(750, 220, 'ground')
    }

    level2 = () => {
        // ground
        this.group.create(400, 568, 'ground').setScale(2).refreshBody()
        // lower level
        this.group.create(365, 400, 'ground').setScale(0.5, 1).refreshBody()
        // mid level
        this.group.create(570, 250, 'ground').setScale(0.5, 1).refreshBody()
        // upper level
        this.group.create(20, 220, 'ground').setScale(0.5, 1).refreshBody()
    }
}
