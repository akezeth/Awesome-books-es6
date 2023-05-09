const displayAllBooks = (books) => {
  const booksContainer = document.querySelector('.books');
  booksContainer.innerHTML = '';
  let current = books.head;
  let index = 0;
  while (current) {
    const newBook = `
          <li class="book flex">
            <div class="discription flex">
              <h3>"${current.value.title}"</h3>
              <span class="by">by</span>
              <p><strong>${current.value.author}</strong></p>
            </div>
            <button onclick="removeBook(${index})">Remove</button>
          </li>
          `;
    booksContainer.innerHTML += newBook;
    current = current.next;
    index += 1;
  }
};

const displayBook = (book, index) => {
  const booksContainer = document.querySelector('.books');
  const newBook = `
        <li class="book flex">
          <div class="discription flex">
            <h3>"${book.title}"</h3>
            <span class="by">by</span>
            <p><strong>${book.author}</strong></p>
          </div>
          <button onclick="removeBook(${index})">Remove</button>
        </li>
        `;
  booksContainer.innerHTML += newBook;
};

export { displayAllBooks, displayBook };