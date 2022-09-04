// global variables
const myLibrary = [];

// global functions
function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary() {}

function displayBooks() {
  for (let book of myLibrary) {
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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const narnia = new Book(
  "The Lion, The Witch and the Wardrobe",
  "C.S. Lewis",
  153,
  true
);

addBookToLibrary(theHobbit);
addBookToLibrary(narnia);
displayBooks();
console.log("Changing read status for the hobbit");
theHobbit.changeReadStatus(true);
displayBooks();
console.log("Changing it back");
theHobbit.changeReadStatus(false);
displayBooks();
