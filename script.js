function updateClock(timezone, elementId) {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: timezone };
    const formattedTime = now.toLocaleTimeString('en-US', options);
    document.getElementById(elementId).textContent = formattedTime;
}

function updateClocks() {
    updateClock('America/New_York', 'newyork-time');
    updateClock('Europe/London', 'london-time');
    updateClock('Asia/Tokyo', 'tokyo-time');
    updateClock('Australia/Sydney', 'sydney-time');
}

setInterval(updateClocks, 1000);
updateClocks();
