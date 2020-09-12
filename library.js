class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "SpiderMan",
        author: "Stan Lee",
        pages: 98765,
      },
      {
        title: "SpiderMan",
        author: "Stan Lee",
        pages: 98765,
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#list");

    const row = document.createElement("col-md-4");

    row.innerHTML = `<p>${book.title}</p> 
      <p>${book.author}</p> 
      <p>${book.pages}</p> 
      <p><input type="checkbox" id="read" class="form"/><label for="read">READ?</label></p>
      <p><button onclick="del()" class="btn btn-danger btn-smdelete">REMOVE</button></p>
      <br> `;

    list.appendChild(row);
  }

  // static deleteBook(e) {
  // if (e.bookList.contains("delete")) {
  // e.parentElement.parentElement.remove();
  //}
  //}

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector("#newBook").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  const book = new Book(title, author, pages);

  UI.addBookToList(book);

  UI.clearFields();
});

//document.querySelector("#list").addEventListener("click", (e) => {
//UI.deleteBook(e.target);
//});
