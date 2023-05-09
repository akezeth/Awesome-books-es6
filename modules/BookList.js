import Node from './Node.js';
import { displayAllBooks } from './displayBooks.js';

class BookList {
  constructor(head, tail, size) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    const localBooks = JSON.stringify(this);
    localStorage.removeItem('books');
    localStorage.setItem('books', localBooks);
  }

  remove(index) {
    let current = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      // const localBooks = JSON.stringify(this);
      localStorage.removeItem('books');
    } else if (index === 0) {
      this.head = current.next;
      this.size -= 1;
      const localBooks = JSON.stringify(this);
      localStorage.removeItem('books');
      localStorage.setItem('books', localBooks);
    } else {
      let previous;
      for (let i = 1; i <= index; i += 1) {
        previous = current;
        current = current.next;
      }
      if (index === this.size - 1) {
        this.tail = previous;
      }
      previous.next = current.next;
      this.size -= 1;
      const localBooks = JSON.stringify(this);
      localStorage.removeItem('books');
      localStorage.setItem('books', localBooks);
    }
    displayAllBooks(this);
  }
}

export default BookList;