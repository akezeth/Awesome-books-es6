import { grabBooks } from './modules/grabBooks.js';
import isValidInput from './modules/isValidInput.js';
import { displayAllBooks, displayBook } from './modules/displayBooks.js';
import Book from './modules/Book.js';
import { DateTime } from './modules/Luxon.js';

const books = grabBooks();
displayAllBooks(books);

const links = document.querySelectorAll('.nav');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');

    const booksList = document.querySelector('#awesome-books');
    const addBooks = document.querySelector('#add-books');
    const contact = document.querySelector('#contact');
    booksList.classList.remove('invisible');
    addBooks.classList.remove('invisible');
    contact.classList.remove('invisible');
    const index = parseInt(e.target.dataset.nav, 10);
    if (index === 0) {
      const books = grabBooks();
      displayAllBooks(books);
      addBooks.classList.add('invisible');
      contact.classList.add('invisible');
    } else if (index === 1) {
      booksList.classList.add('invisible');
      contact.classList.add('invisible');
    } else {
      booksList.classList.add('invisible');
      addBooks.classList.add('invisible');
    }
  });
});