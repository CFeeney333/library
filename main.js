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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const narnia = new Book(
  "The Lion, The Witch and the Wardrobe",
  "C.S. Lewis",
  153,
  true
);

const hobbitCopy = new Book("The Hobbit", "Jim Random", 14, false);

addBookToLibrary(theHobbit);
addBookToLibrary(hobbitCopy);
displayBooks();
removeBookFromLibrary("The Hobbit"); // this title will be stored as a data attribute in the html when the book is added to the library
displayBooks();
removeBookFromLibrary("The Hobbit");
displayBooks();
