const cardContainer = document.querySelector(".cards");

let myLibrary = [];

function Book(author, title, pageCount, isRead) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return {
    author: this.author,
    title: this.title,
    pageCount: this.pageCount,
    isRead: this.isRead,
  };
};

function addBookToLibrary(author, title, pageCount, isRead) {
  myLibrary.push(new Book(author, title, pageCount, isRead));
  displayBooks();
}

function displayBooks() {
  while (cardContainer.hasChildNodes()) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  let card = null;
  for (let book of myLibrary) {
    card = createCard(book);
    cardContainer.appendChild(card);
  }
}

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h1");
  title.innerHTML = book.title;

  const author = document.createElement("p");
  author.innerHTML = book.author;

  card.appendChild(title);
  card.appendChild(author);

  return card;
}

// for testing purposes
addBookToLibrary("JRR Tolkien", "The Hobbit", 124, true);
addBookToLibrary("Mark Twain", "Huckleberry Finn", 285, true);
