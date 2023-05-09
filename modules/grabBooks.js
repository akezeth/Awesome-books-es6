import BookList from './BookList.js';
import { displayAllBooks } from './displayBooks.js';

const grabBooks = () => {
  let books = JSON.parse(localStorage.getItem('books'));
  if (books === null) {
    books = new BookList(null, null, 0);
  } else {
    books = new BookList(books.head, books.tail, books.size);
    const { tail } = books;
    books.remove(books.size - 1);
    books.add(tail.value);
    displayAllBooks(books);
  }
  return books;
};

const removeButton = (index) => {
  const books = grabBooks();
  books.remove(index);
};

export { grabBooks, removeButton };
window.removeBook = removeButton;
