function redirectToVideo() {
    const dropdown = document.getElementById("topicDropdown");
    const selectedValue = dropdown.value;

    if (selectedValue) {
        window.open(selectedValue, "_blank");
    } else {
        alert("Please select a topic!");
    }
}
