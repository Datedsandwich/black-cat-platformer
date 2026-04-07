export const platformLayouts = [
    // Layout 0: original layout
    [
        { x: 400, y: 568, scaleX: 2, scaleY: 2 },
        { x: 612, y: 400 },
        { x: 50, y: 250 },
        { x: 750, y: 220 }
    ],
    // Layout 1: narrower platforms, harder
    [
        { x: 400, y: 568, scaleX: 2, scaleY: 2 },
        { x: 365, y: 400, scaleX: 0.5, scaleY: 1 },
        { x: 570, y: 250, scaleX: 0.5, scaleY: 1 },
        { x: 20, y: 220, scaleX: 0.5, scaleY: 1 }
    ]
]

// Each level defines which platform layout to use and how many rocks must be
// survived before the level is cleared. Tune maxRocks based on how the game feels.
export const levels = [
    { platformLayout: 0, maxRocks: 5 },
    { platformLayout: 1, maxRocks: 5 },
    { platformLayout: 0, maxRocks: 9 },
    { platformLayout: 1, maxRocks: 9 },
    { platformLayout: 0, maxRocks: 17 },
    { platformLayout: 1, maxRocks: 17 },
    { platformLayout: 0, maxRocks: 25 },
    { platformLayout: 1, maxRocks: 25 }
]
