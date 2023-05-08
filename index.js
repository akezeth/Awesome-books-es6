const displaySection = (sectionNumber) => {
  const booksList = document.querySelector('#awesome-books');
  const addBooks = document.querySelector('#add-books');
  const contact = document.querySelector('#contact');
  const nav1 = document.querySelector('.nav1');
  const nav2 = document.querySelector('.nav2');
  const nav3 = document.querySelector('.nav3');

  booksList.classList.remove('visible');
  addBooks.classList.remove('visible');
  contact.classList.remove('visible');
  nav1.classList.remove('active');
  nav2.classList.remove('active');
  nav3.classList.remove('active');

  if (sectionNumber === 1) {
    booksList.classList.add('visible');
    nav1.classList.add('active');
  } else if (sectionNumber === 2) {
    addBooks.classList.add('visible');
    nav2.classList.add('active');
  } else {
    contact.classList.add('visible');
    nav3.classList.add('active');
  }
}