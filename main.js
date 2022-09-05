// global variables
const myLibrary = [];

// global dom references
const cards = document.querySelector(".cards");
const form = document.querySelector(".form");
const newButton = document.querySelector("#new-button");
const cancelButton = document.querySelector("#cancel-button");
const addButton = document.querySelector("#add-button");

// add event listeners
newButton.addEventListener("click", onNewButton);
cancelButton.addEventListener("click", onCancelButton);
addButton.addEventListener("click", onAddButton);

// dynamic html creation
function createCard(book, dataID) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("book");
  if (book.isRead) {
    card.classList.add("read");
  }
  card.setAttribute("data-id", dataID);

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = book.title;

  const authorGroup = document.createElement("div");
  authorGroup.classList.add("author-group");

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = book.author;

  const by = document.createElement("p");
  by.textContent = "by";

  authorGroup.appendChild(by);
  authorGroup.appendChild(author);

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = book.pages + " pages";

  const isReadToggle = document.createElement("button");
  isReadToggle.addEventListener("click", onReadToggleButton);
  isReadToggle.textContent = book.isRead
    ? "I have read this"
    : "I have not read this";

  const removeButton = document.createElement("button");
  const closeImg = document.createElement("img");
  closeImg.src = "icons/close-circle-outline.svg";
  closeImg.alt = "remove";
  removeButton.appendChild(closeImg);
  removeButton.classList.add("remove-button");
  removeButton.addEventListener("click", onRemoveButton);

  card.appendChild(title);
  card.appendChild(authorGroup);
  card.appendChild(pages);
  card.appendChild(isReadToggle);
  card.appendChild(removeButton);
  return card;
}

// event callbacks
function onNewButton(event) {
  makeVisible(form);
}

function onCancelButton(event) {
  makeHidden(form);
}

function onAddButton(event) {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("#is-read");

  const book = new Book(title.value, author.value, pages.value, isRead.checked);
  addBookToLibrary(book);

  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;

  makeHidden(form);
  displayBooks();
}

function onReadToggleButton(event) {
  const parent = event.target.parentNode;
  const book = myLibrary[parent.getAttribute("data-id")];
  book.toggleReadStatus();
  displayBooks();
}

function onRemoveButton(event) {
  const parent = event.target.parentNode;
  removeBookFromLibrary(parent.getAttribute("data-id"));
  displayBooks();
}

// global functions
function makeHidden(elem) {
  if (!elem.classList.contains("hidden")) {
    elem.classList.add("hidden");
  }
}

function makeVisible(elem) {
  if (elem.classList.contains("hidden")) {
    elem.classList.remove("hidden");
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function displayBooks() {
  while (cards.firstChild && cards.lastChild.id !== "new-card") {
    // we don't want to remove the card that adds new cards
    cards.removeChild(cards.lastChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    cards.appendChild(createCard(book, i));
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

Book.prototype.toggleReadStatus = function () {
  if (this.isRead) {
    this.isRead = false;
  } else {
    this.isRead = true;
  }
};

// const theHobbit = new Book("The Hobbit", "J R R Tolkien", 256, true);
// addBookToLibrary(theHobbit);
