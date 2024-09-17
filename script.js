function updateClocks() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourDegrees = (hours % 12 + minutes / 60) * 30;
    const minuteDegrees = (minutes + seconds / 60) * 6;
    const secondDegrees = seconds * 6;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

function startClock() {
    updateClocks(); 
    setInterval(updateClocks, 1000); 
}
setTimeout(startClock, 500);