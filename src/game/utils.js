import { LEVEL_BONUS_MAX, LEVEL_BONUS_DECAY_RATE } from './const/gameConfig'

export const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

// Returns a time bonus on an exponential decay curve.
// Full bonus (LEVEL_BONUS_MAX) is awarded within parTime seconds.
// After parTime, the bonus decays quickly and is rounded to the nearest 10.
export const calculateLevelBonus = (seconds, parTime) => {
    const overtime = Math.max(0, seconds - parTime)
    const raw = LEVEL_BONUS_MAX * Math.exp(-LEVEL_BONUS_DECAY_RATE * overtime)
    return Math.round(raw / 10) * 10
}
