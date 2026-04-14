function loadFavorites() {
  const container = document.getElementById("favorites-container");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  container.innerHTML = "";

  favorites.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("quote-card");

  div.innerHTML = `
    <p>${item.quote}</p>
    <h4>${item.author}</h4>
    <button onclick="removeFavorite(${index})">Remove</button>
  `;

  container.appendChild(div);
});
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadFavorites();
}

loadFavorites();