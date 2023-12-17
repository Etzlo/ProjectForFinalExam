// Open Modal
function openModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = 'block';
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = 'none';
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    overlay.style.opacity = '0';
}

// Login
function performLogin() {
    const username = document.getElementById('username').value;
    updateUsername(username);
    closeModal('login');
}

// Registration
function performRegistration() {
    const newUsername = document.getElementById('newUsername').value;
    updateUsername(newUsername);
    closeModal('register');
}

// Log out
function logout() {
    updateUsername('');
}

// Show Username
function updateUsername(username) {
    const userNames = document.getElementsByClassName('user-name');

    for (const userName of userNames) {
        userName.innerText = username;
        userName.style.display = username ? 'inline' : 'none';
    }
}


function saveInformation(username, password) {
    localStorage.setItem('savedUsername', username);
    localStorage.setItem('savedPassword', password);
}

function performLogin() {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === savedUsername && password === savedPassword) {
        updateUsername(username);
        closeModal('login');
    } else {
        displayErrorMessage('Incorrect username or password', 'login');
    }
}

function performRegistration() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    saveInformation(newUsername, newPassword);
    closeModal('register');
}


function displayErrorMessage(message, modalId) {
    const existingErrorMessage = document.querySelector(`#${modalId}Modal .error-message`);
    
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    const errorMessageContainer = document.createElement('div');
    errorMessageContainer.className = 'error-message';
    errorMessageContainer.innerText = message;

    const modal = document.getElementById(modalId + 'Modal');
    modal.appendChild(errorMessageContainer);
}

