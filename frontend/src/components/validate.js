function secondsToMinutes(seconds) {
    return seconds / 60
}

function secondsToHours(seconds) {
    let minutes = seconds / 60
    let hours = 0

    do {
        if (minutes >= 60) {
            hours++
            minutes = minutes - 60
        }
    } while (minutes >= 60)

    return `${hours}h ${minutes}m`
}

// Export
module.exports = {
    secondsToMinutes,
    secondsToHours
}