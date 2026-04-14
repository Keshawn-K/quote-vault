function loadFavorites() {
  const container = document.getElementById("favorites-container");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  container.innerHTML = "";

  favorites.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("quote-card");

    div.innerHTML = `
      <p>${item.quote}</p>
      <h4>${item.author}</h4>
    `;

    container.appendChild(div);
  });
}

loadFavorites();