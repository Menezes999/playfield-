// Armazenar dados da conta no localStorage
function saveUserData() {
    const name = document.getElementById('user-name').textContent;
    const avatar = document.getElementById('avatar').textContent;

    localStorage.setItem('userName', name);
    localStorage.setItem('avatar', avatar);
}

// Carregar dados da conta, se existir
function loadUserData() {
    const savedName = localStorage.getItem('userName');
    const savedAvatar = localStorage.getItem('avatar');

    if (savedName && savedAvatar) {
        document.getElementById('user-name').textContent = savedName;
        document.getElementById('avatar').textContent = savedAvatar;
    }
}

// Função para alterar o nome do usuário e avatar
function changeUserData(name, avatar) {
    document.getElementById('user-name').textContent = name;
    document.getElementById('avatar').textContent = avatar || name.charAt(0).toUpperCase();
    saveUserData();
}

// Chamadas iniciais
loadUserData();
