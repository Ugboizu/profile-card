

function updateCurrentTimeUTC() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utc_time').textContent = utcTime;
}
updateCurrentTimeUTC();
setInterval(updateCurrentTimeUTC, 1000);