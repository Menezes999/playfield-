document.addEventListener("DOMContentLoaded", () => {
  const userName = document.getElementById("user-name");
  const userAvatar = document.getElementById("user-avatar");
  const editProfile = document.getElementById("edit-profile");

  // Verifica se há dados armazenados localmente
  const storedName = localStorage.getItem("playfield-user-name");
  const storedAvatar = localStorage.getItem("playfield-user-avatar");

  if (storedName) {
    userName.textContent = storedName;
    userAvatar.textContent = storedName.charAt(0).toUpperCase();
  }

  if (storedAvatar) {
    userAvatar.style.backgroundImage = `url(${storedAvatar})`;
    userAvatar.style.backgroundSize = "cover";
    userAvatar.style.color = "transparent";
  }

  // Editar perfil
  editProfile.addEventListener("click", () => {
    const name = prompt("Digite seu nome:");
    if (name) {
      localStorage.setItem("playfield-user-name", name);
      userName.textContent = name;
      userAvatar.textContent = name.charAt(0).toUpperCase();
    }

    const avatar = prompt("Insira a URL da sua foto de avatar:");
    if (avatar) {
      localStorage.setItem("playfield-user-avatar", avatar);
      userAvatar.style.backgroundImage = `url(${avatar})`;
      userAvatar.style.backgroundSize = "cover";
      userAvatar.style.color = "transparent";
    }
  });
});
