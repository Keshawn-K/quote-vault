function loadFavorites() {
  const container = document.getElementById("favorites-container");

  const clearButton = document.getElementById("clear-btn");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  container.innerHTML = "";

  if (favorites.length === 0) {
  container.innerHTML = "<p>No favorites yet.</p>";
  clearButton.style.display = "none";
  return;
}

  clearButton.style.display = "block";

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

document.getElementById("clear-btn").addEventListener("click", clearFavorites);

function clearFavorites() {
  localStorage.removeItem("favorites");
  loadFavorites();
}

loadFavorites();