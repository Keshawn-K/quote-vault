# QuoteVault

QuoteVault is a quote web application built with HTML, CSS, and JavaScript. The app allows users to browse inspirational quotes, search for quotes or authors, save their favorite quotes, and manage those favorites across different pages.

The project uses the DummyJSON Quotes API together with Local Storage to create a simple but interactive experience.

Live Site:
https://keshawn-k.github.io/quote-vault/quote_vault/



# Features

## Home Page

* Display a random quote when the page loads
* Generate a new random quote by clicking the "New Quote" button
* Search for a quote using keywords or an author's name
* Copy the displayed quote directly to the clipboard
* Save the displayed quote to favorites

## Favorites Page

* View all saved favorite quotes
* Remove individual quotes from favorites
* Clear all favorite quotes at once
* Display a message when there are no favorites saved
* Hide the "Clear Favorites" button when there are no saved favorites

## User Interface

* Responsive design for smaller screens
* Navigation bar with hover effects
* Active page highlighting in the navigation bar
* Footer displayed on both pages
* User feedback message after copying a quote



# Tools Used

* HTML
* CSS
* JavaScript
* Local Storage
* DummyJSON Quotes API
* Github



# How the App Works

1. The app fetches quote data from the DummyJSON API.
2. When a user clicks "New Quote", a random quote is displayed.
3. The search feature checks all available quotes and displays a matching result.
4. Favorite quotes are stored in the browser using Local Storage.
5. The Favorites page reads from Local Storage and displays the saved quotes.
6. Users can remove one favorite or clear them all.



# Project Structure

QuoteVault/
* index.html     -    Home page
* favorites.html -    Favorites page
* style.css      -    Main styling file
* index.js       -    JavaScript for the home page
* favorites.js   -    JavaScript for the favorites page
* README.md      -     Project documentation




# Installation and Usage

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html' in a browser.
4. Use the buttons and search feature to interact with the app.



# Example of How to Use QuoteVault

* Search for a word like 'life' or an author name such as 'Albert Einstein'
* Save a quote to favorites
* Open the Favorites page to see saved quotes
* Copy a quote and paste it elsewhere




# Author

Created by Keshawn Kingori
