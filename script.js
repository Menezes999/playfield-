// Mostrar Modal
function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
}

function showRegister() {
    document.getElementById('register-modal').style.display = 'flex';
}

// Fechar Modal
function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'none';
}

// Login
function loginUser() {
    const username = document.getElementById('login-name').value;
    if (username) {
        localStorage.setItem('userName', username);
        document.getElementById('user-name').textContent = username;
        document.getElementById('avatar').textContent = username.charAt(0).toUpperCase();
        closeModal();
    }
}

// Registro
function registerUser() {
    const username = document.getElementById('register-name').value;
    if (username) {
        localStorage.setItem('userName', username);
        document.getElementById('user-name').textContent = username;
        document.getElementById('avatar').textContent = username.charAt(0).toUpperCase();
        window.location.href = 'games.html';
    }
}

// Carregar Dados
function loadUserData() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('user-name').textContent = userName;
        document.getElementById('avatar').textContent = userName.charAt(0).toUpperCase();
    }
}

loadUserData();
