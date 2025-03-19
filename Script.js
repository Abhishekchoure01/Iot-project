// Update Time
function updateTime() {
    let now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toDateString();
}
setInterval(updateTime, 1000);
updateTime();

// Fetch IoT Data (Mock JSON)
async function getIoTData() {
    let response = await fetch("data.json"); // Use real IoT API later
    let data = await response.json();
    document.getElementById("iot-data").innerText = `Sensor: ${data.sensor}, Value: ${data.value}`;
}
getIoTData();
