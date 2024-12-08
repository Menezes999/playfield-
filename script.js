/* Resetações */
body, h1, h2, p, ul, li, button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #1b2838;
  color: #c7d5e0;
  margin: 0;
}

header {
  background-color: #171a21;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  color: #66c0f4;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #c7d5e0;
}

.nav-links a:hover {
  color: #66c0f4;
}

.user-section {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #66c0f4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

main {
  padding: 20px;
}

.main-banner {
  display: flex;
  margin-bottom: 30px;
}

.banner-content {
  position: relative;
  background-color: #2a475e;
}

.banner-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}

.highlights, .library {
  margin-top: 30px;
}

.carousel {
  display: flex;
  gap: 10px;
}

.carousel-item {
  width: 200px;
}

.game-grid {
  display: flex;
  gap: 10px;
}
