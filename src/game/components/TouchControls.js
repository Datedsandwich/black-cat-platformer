import { mobileInput } from '../mobileInput'

export class TouchControls {
    // Exposes the shared input state that HTML buttons write to
    input = mobileInput

    constructor(scene) {
        if (scene.sys.game.device.input.touch) {
            // Support up to 3 simultaneous touch points (e.g. left + right + jump)
            scene.input.addPointer(2)
        }
    }
}
