// Display Modal Window
function openModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = 'block';
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
}

// Hide a Modal Window
function closeModal(modalId) {
    document.getElementById(modalId + 'Modal').style.display = 'none';
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    overlay.style.opacity = '0';
}

// Login simulation
function performLogin() {
    // Здесь должен быть код отправки данных на сервер (проверки логина и пароля)
    const username = document.getElementById('username').value;
    updateUsername(username);
    closeModal('login');
}

// Simulated registration
function performRegistration() {
    // Здесь должен быть код отправки данных на сервер
    const newUsername = document.getElementById('newUsername').value;
    updateUsername(newUsername);
    closeModal('register');
}

// Simulation of Exit
function logout() {
    updateUsername('');
}

// Обновление отображения имени пользователя
function updateUsername(username) {
    const userNames = document.getElementsByClassName('user-name');

    for (const userName of userNames) {
        userName.innerText = username;
        userName.style.display = username ? 'inline' : 'none';
    }
}
