// Usuário Local
function loadUserData() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('user-name').textContent = userName;
        document.getElementById('avatar').textContent = userName.charAt(0).toUpperCase();
    }
}

// Configuração Inicial
loadUserData();
