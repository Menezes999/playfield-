// Alternar Tema
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const themeButton = document.getElementById("toggle-theme");
    themeButton.textContent = document.body.classList.contains("light-theme")
        ? "🌞"
        : "🌙";
});

// Login e Registro
document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const profilePic = document.getElementById("profile-pic").files[0];

    localStorage.setItem("username", username);

    if (profilePic) {
        const reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem("profilePic", reader.result);
        };
        reader.readAsDataURL(profilePic);
    }

    alert(`Bem-vindo, ${username}!`);
    window.location.href = "#games";
});
