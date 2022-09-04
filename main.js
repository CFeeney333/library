// global variables
const myLibrary = {};

// global functions
function addBookToLibrary(book) {
  if (!Object.keys(myLibrary).includes(book.title)) {
    myLibrary[book.title] = book;
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
