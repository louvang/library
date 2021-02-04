# Library

A simple reading log that allows you to add, edit, and delete books.

<p align="center"><a href="https://louvang.github.io/library/" target="_blank"><img src="https://louvang.github.io/library/img/screenshot.png" alt="Library Preview" width="750px" /></a></p>

## How To

Simply click on the "Add New Book" button where a modal will prompt the user for details about the book. Click the "Add Book" button and the book will appear in the reading list. Users can also edit and delete their books using the buttons in the Edit column. When the user refreshes the page, the list they modified will still stay the same.

This webapp uses LocalStorage so if a user clears their web browser's cache or access the page on a different device, they will not be able to find their saved list.

## About Code

The Library uses the [Bootstrap](https://getbootstrap.com) library for front-end interactions. Saved books are cached into the LocalStorage of the user's browser.'

There are two very similar JavaScript files in the `js` directory.

- `js/script.js` - This file does not save books into the browser's local storage.
- `js/local-storage.js` - This file saves books into the browser's local storage.

The preview is wired up to `local-storage.js` so books will be saved into the user's local storage.

## Thoughts

I'll admit, I spent way too much time trying to figure out how I wanted the layout to look. I was overly ambitious at first and wanted to wire this up to Firebase but I realized that it was a bit too many pages I'd have to create (login, log out, sign up, etc.). Seeing as I only wanted to work on this as a mini-project, I opted for a minimalist layout using Bootstrap. Sometimes ambitious projects turn out to be a lot bigger than expected. I do still want to make an expanded, more detailed version of a media log much like this library. That will be a side project reserved for another time.

## Further Improvements

Very minor improvements:

- Clear reading list button
- Allow users to toggle complete/incompleted books directly on the list rather than through the modal pop-up

Very likely in the far future, I'll be creating a media log webapp much similar to this Library for my own personal use. I plan to use one of the 3 front-end frameworks (most likely React), MongoDB or SQL for data, and either Node.js or Python for server-side code.

Additionally, I've been looking at the Google Books API, Spotify's API, and IMDb's API for logging what I read/watch/listen. And if it's not too ambitious, maybe even open it open it up for the public to use.
