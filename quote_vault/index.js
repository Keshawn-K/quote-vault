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

document.getElementById("search-btn").addEventListener("click", searchQuotes);

async function searchQuotes() {
  const query = document.getElementById("search-input").value.toLowerCase();

  const response = await fetch("https://dummyjson.com/quotes");
  const data = await response.json();

  const results = data.quotes.filter(q =>
    q.quote.toLowerCase().includes(query) ||
    q.author.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    const randomIndex = Math.floor(Math.random() * results.length);
    const selected = results[randomIndex];

    document.getElementById("quote").textContent = selected.quote;
    document.getElementById("author").textContent = "- " + selected.author;
  } else {
    document.getElementById("quote").textContent = "No quotes found.";
    document.getElementById("author").textContent = "";
  }
}

document.getElementById("copy-btn").addEventListener("click", copyQuote);

function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;

  const textToCopy = `${quote} ${author}`;

  navigator.clipboard.writeText(textToCopy);

 const message = document.getElementById("copy-message");

message.textContent = "Quote copied!";

setTimeout(() => {
  message.textContent = "";
}, 1000);
}