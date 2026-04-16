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

// Each level defines which platform layout to use, how many rocks must be
// survived before the level is cleared, and a par time (seconds) within which
// the player earns the maximum time bonus. Tune parTime per level based on
// your own playtest data.
export const levels = [
    { platformLayout: 0, maxRocks: 5, parTime: 30 }, // Level 1
    { platformLayout: 1, maxRocks: 5, parTime: 35 }, // Level 2
    { platformLayout: 0, maxRocks: 9, parTime: 60 }, // Level 3
    { platformLayout: 1, maxRocks: 9, parTime: 70 }, // Level 4
    { platformLayout: 0, maxRocks: 17, parTime: 120 }, // Level 5
    { platformLayout: 1, maxRocks: 17, parTime: 140 }, // Level 6
    { platformLayout: 0, maxRocks: 25, parTime: 180 }, // Level 7
    { platformLayout: 1, maxRocks: 25, parTime: 210 } // Level 8
]
