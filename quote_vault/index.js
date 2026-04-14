async function getQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();

  document.getElementById("quote").textContent = data.quote;
  document.getElementById("author").textContent = "- " + data.author;
}

getQuote();

document.getElementById("new-quote-btn").addEventListener("click", getQuote);