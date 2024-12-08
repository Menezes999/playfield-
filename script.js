document.addEventListener("DOMContentLoaded", () => {
  const userName = document.getElementById("user-name");
  const userAvatar = document.getElementById("user-avatar");

  const storedName = localStorage.getItem("userName");
  const storedAvatar = localStorage.getItem("userAvatar");

  if (storedName) {
    userName.textContent = storedName;
    userAvatar.textContent = storedName[0];
  }

  if (storedAvatar) {
    userAvatar.style.backgroundImage = `url(${storedAvatar})`;
    userAvatar.style.backgroundSize = "cover";
    userAvatar.style.color = "transparent";
  }

  // Simula criação de conta
  if (!storedName) {
    const newName = prompt("Escolha seu nome:");
    localStorage.setItem("userName", newName);
    userName.textContent = newName;
    userAvatar.textContent = newName[0];
  }
});
