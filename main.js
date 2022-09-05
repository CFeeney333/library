// global variables
const myLibrary = {};

// global dom references
const cards = document.querySelector(".cards");
const form = document.querySelector(".form");
const newButton = document.querySelector("#new-button");
const cancelButton = document.querySelector("#cancel-button");
const addButton = document.querySelector("#add-button");

// add event listeners
newButton.addEventListener("click", onNewButton);
cancelButton.addEventListener("click", onCancelButton);

// dynamic html creation
function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("div");
  title.textContent = book.title;

  const author = document.createElement("div");
  author.textContent = book.author;

  const pages = document.createElement("div");
  pages.textContent = book.pages;

  const isReadToggle = document.createElement("button");
  isReadToggle.addEventListener("click", onReadToggleButton);
  isReadToggle.classList.add("is-read-toggle");
  isReadToggle.textContent = book.isRead
    ? "I have read this"
    : "I have not read this";

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", onRemoveButton);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(isReadToggle);
  card.appendChild(removeButton);
  return card;
}

// event callbacks
function onNewButton(event) {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  }
}

function onCancelButton(event) {
  if (!form.classList.contains("hidden")) {
    form.classList.add("hidden");
  }
}

// global functions
function addBookToLibrary(book) {
  if (!Object.keys(myLibrary).includes(book.title)) {
    myLibrary[book.title] = book;
    cards.appendChild(createCard(book));
  } else {
    console.log("Library already contains book " + book.title);
  }
}

function removeBookFromLibrary(title) {
  if (Object.keys(myLibrary).includes(title)) {
    delete myLibrary[title];
  } else {
    console.log("Library does not contain book " + title);
  }
}

function displayBooks() {
  for (let book of Object.values(myLibrary)) {
    console.log(book.info());
  }
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.isRead ? "read" : "not read yet"
  }`;
};

Book.prototype.changeReadStatus = function (isRead) {
  this.isRead = isRead;
};

const theHobbit = new Book("The Hobbit", "J R R Tolkien", 256, true);
addBookToLibrary(theHobbit);
