// Exemplo básico de interatividade

// Alterne entre as seções ao clicar nos botões do menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão de rolagem
    const targetSection = document.querySelector(this.getAttribute("href"));

    // Esconde todas as seções
    document.querySelectorAll("main section").forEach(section => {
      section.style.display = "none";
    });

    // Mostra a seção alvo
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});

// Inicializa exibindo somente a seção "Loja"
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("main section").forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });
});

// Adiciona funcionalidade ao botão "Jogar" (exemplo)
document.addEventListener("click", event => {
  if (event.target.classList.contains("play-button")) {
    const gameName = event.target.dataset.gameName;
    alert(`Iniciando o jogo: ${gameName}`);
  }
});

// Exemplo de preenchimento dinâmico da loja
const games = [
  { name: "Jogo 1", price: "R$59,99", image: "https://via.placeholder.com/200" },
  { name: "Jogo 2", price: "R$79,99", image: "https://via.placeholder.com/200" },
  { name: "Jogo 3", price: "R$99,99", image: "https://via.placeholder.com/200" }
];

function loadStore() {
  const storeGrid = document.querySelector(".game-grid");
  games.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>${game.price}</p>
      <button class="play-button" data-game-name="${game.name}">Comprar</button>
    `;
    storeGrid.appendChild(gameCard);
  });
}

document.addEventListener("DOMContentLoaded", loadStore);
