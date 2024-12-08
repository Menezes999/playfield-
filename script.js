// Alternar Tema Claro/Escuro
const themeButton = document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeButton.textContent =
        document.body.classList.contains("light-theme") ? "🌞" : "🌙";
});

// Dados de Usuário
function loadUserData() {
    const userName = localStorage.getItem("userName");
    if (userName) {
        const userSection = document.querySelector("#profile");
        userSection.textContent = `Bem-vindo, ${userName}`;
    }
}

loadUserData();
