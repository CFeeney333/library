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
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function displayBooks() {
  while (cardContainer.hasChildNodes()) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  let card = null;
  for (let i = 0; i < myLibrary.length; i++) {
    card = createCard(myLibrary[i], i);
    cardContainer.appendChild(card);
  }
}

function createCard(book, id) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = id;

  const title = document.createElement("h1");
  title.innerHTML = book.title;

  const author = document.createElement("p");
  author.innerHTML = book.author;

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", onRemoveButtonClick);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(removeButton);

  return card;
}

function onRemoveButtonClick(event) {
  removeBookFromLibrary(event.target.dataset.id);
  displayBooks();
}

// for testing purposes
addBookToLibrary("JRR Tolkien", "The Hobbit", 124, true);
addBookToLibrary("Mark Twain", "Huckleberry Finn", 285, true);
displayBooks();
