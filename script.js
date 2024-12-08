// Exibir o modal de login
function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
}

// Exibir o modal de registro
function showRegister() {
    document.getElementById('register-modal').style.display = 'flex';
}

// Fechar o modal
function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'none';
}

// Login de usuário
function loginUser() {
    const username = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;
    if (username && password) {
        localStorage.setItem('userName', username);
        document.getElementById('user-name').textContent = username;
        document.getElementById('avatar').textContent = username.charAt(0).toUpperCase();
        closeModal();
    }
}

// Registro de novo usuário
function registerUser() {
    const username = document.getElementById('register-name').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        localStorage.setItem('userName', username);
        document.getElementById('user-name').textContent = username;
        document.getElementById('avatar').textContent = username.charAt(0).toUpperCase();
        closeModal();
    }
}

// Carregar dados do usuário
function loadUserData() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('user-name').textContent = userName;
        document.getElementById('avatar').textContent = userName.charAt(0).toUpperCase();
    }
}

loadUserData();
