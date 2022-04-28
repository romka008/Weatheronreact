export function getTime(i) {
    const date = new Date(i * 1000)
    return date.getHours() + ':' + date.getMinutes()
}