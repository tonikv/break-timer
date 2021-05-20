export default function timeParser(time) {
    let minutes = time.minutes.toString();
    let seconds = time.seconds.toString();
    if(time.seconds < 10) {
        seconds = `0${seconds}`
    }
    const timeObject = {
        minutes: minutes,
        seconds: seconds
    }
    return timeObject
}