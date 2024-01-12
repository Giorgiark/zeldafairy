// Function to toggle between dark and light modes
function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const isDarkMode = body.classList.contains('dark-mode');

    // Toggle the class based on the current mode
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeToggle.innerHTML = '🌙'; // Switch to moon emoji for light mode
        saveModePreference('light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeToggle.innerHTML = '☀️'; // Switch to sun emoji for dark mode
        saveModePreference('dark');
    }
}


//Adding Save Preference

// Function to save user's mode preference to local storage
function saveModePreference(mode) {
    localStorage.setItem('modePreference', mode);
}

// Function to retrieve user's mode preference from local storage on page load
function retrieveModePreference() {
    const savedMode = localStorage.getItem('modePreference');
    if (savedMode) {
        document.body.classList.add(savedMode + '-mode');
        document.getElementById('modeToggle').innerHTML = savedMode === 'dark' ? '☀️' : '🌙';
    }
}