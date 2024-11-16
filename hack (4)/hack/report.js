// Get user's location using the Geolocation API
function fetchLocationAndUpdateInput() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById('location').value = `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`;
        }, function() {
            document.getElementById('location').value = "Location access denied.";
        });
    } else {
        document.getElementById('location').value = "Geolocation not supported.";
    }
}

// Call the location function initially when the page loads
fetchLocationAndUpdateInput();

// Update the slider value display and adjust the slider size
function adjustSlider(value) {
    const sliderValue = document.getElementById('criticality-value');
    sliderValue.textContent = value;

    // Adjust slider size based on criticality
    const slider = document.getElementById('criticality');
    const scaleFactor = value / 10; // Scale factor between 0 and 1
    slider.style.height = `${20 + (scaleFactor * 10)}px`; // Increase height based on criticality
}

// Panic Button functionality
document.getElementById('panicButton').addEventListener('click', function() {
    fetchLocationAndUpdateInput();
    alert("Emergency! Panic alert sent with high priority!");
    window.location.href = 'assistance.html'; // Redirect to assistance page after panic alert
});
