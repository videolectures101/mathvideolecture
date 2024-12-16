// Define playlist URLs
var playlistUrls = {
    'Algebra': 'https://videolectures101.github.io/videolectures/',
    'Geometry': 'https://videolectures101.github.io/geometryvideo/',
    'Arithmetic': 'https://videolectures101.github.io/arithmetic/'
};

// Get DOM elements
var topicSelector = document.getElementById('topicSelector');
var goButton = document.getElementById('goButton');

// Enable/disable button based on selection
topicSelector.addEventListener('change', function () {
    goButton.disabled = !this.value;
});

// Navigate to selected playlist
goButton.addEventListener('click', function () {
    var selectedTopic = topicSelector.value;
    if (selectedTopic && playlistUrls[selectedTopic]) {
        window.open(playlistUrls[selectedTopic], '_blank');
    }
});
