export const animations = {
    cat_stand: {
        key: 'cat_stand',
        frames: [{ key: 'cat', frame: 0 }],
        frameRate: 20
    },
    cat_walk: {
        key: 'cat_walk',
        frames: [
            { key: 'cat', frame: 1 },
            { key: 'cat', frame: 2 },
            { key: 'cat', frame: 3 },
            { key: 'cat', frame: 4 }
        ],
        frameRate: 10,
        repeat: -1
    },
    cat_dead: {
        key: 'cat_dead',
        frames: [{ key: 'cat', frame: 5 }],
        frameRate: 20
    },
    cat_jump: {
        key: 'cat_jump',
        frames: [{ key: 'cat', frame: 1 }],
        frameRate: 20
    }
}
