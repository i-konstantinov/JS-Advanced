function calcWalkTime(steps, footprintLen, speed) {
    let distInMeters = footprintLen * steps;

    let minutesOfBreak = parseInt(distInMeters / 500);
    let secondsOfBrake = minutesOfBreak * 60;
    
    let speedInMetersPerSec = (speed / 3.6);

    let timeInSecs = (distInMeters / speedInMetersPerSec) + secondsOfBrake;
    
    let hours = 0;
    let minutes = parseInt(timeInSecs / 60);
    let seconds = (timeInSecs % 60).toFixed(0);
    
    while (minutes > 59) {
        minutes -= 60;
        hours += 1;
    }

    if (hours < 10) {hours = '0'+hours;}
    if (minutes < 10) {minutes = '0'+minutes;}
    if (seconds < 10) {seconds = '0'+seconds;}

    console.log(`${hours}:${minutes}:${seconds}`);
}


calcWalkTime(4000, 0.6, 1);
calcWalkTime(2564, 0.70, 5.5);