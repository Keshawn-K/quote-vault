async function getQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();

  document.getElementById("quote").textContent = data.quote;
  document.getElementById("author").textContent = "- " + data.author;
}

getQuote();

document.getElementById("new-quote-btn").addEventListener("click", getQuote);

document.getElementById("save-btn").addEventListener("click", saveQuote);

function saveQuote() {
  const quoteText = document.getElementById("quote").textContent;
  const authorText = document.getElementById("author").textContent;

  const quoteObj = {
    quote: quoteText,
    author: authorText
  };

  // get existing favorites
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // add new quote
  favorites.push(quoteObj);

  // save back to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  alert("Quote saved!");
}