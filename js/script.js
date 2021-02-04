let myLibrary = [];
const list = document.getElementById('reading-list');
let editId, deleteId;

const Book = function Book(author, title, pageCt, completed) {
  this.author = author;
  this.title = title;
  this.pageCt = pageCt;
  this.completed = completed;
};

myLibrary.push(new Book('Delia Owens', 'Where the Crawdads Sing', 384, true));
myLibrary.push(new Book('Ernest Cline', 'Ready Player One', 374, true));
myLibrary.push(new Book('Ernest Cline', 'Ready Player Two', 384, false));
myLibrary.push(new Book('Garth Nix', 'Sabriel', 352, false));
myLibrary.push(new Book('Garth Nix', 'Lirael', 512, true));
myLibrary.push(new Book('J.R.R. Tolkien', 'The Hobbit', 288, true));
myLibrary.push(new Book('J.R.R. Tolkien', 'The Fellowship of the Ring', 448, true));
myLibrary.push(new Book('J.R.R. Tolkien', 'The Two Towers', 352, false));
myLibrary.push(new Book('J.R.R. Tolkien', 'The Return of the King', 464, false));
myLibrary.push(new Book('Michelle Obama', 'Becoming', 426, true));
myLibrary.push(new Book('Neil Gaiman', 'American Gods', 624, true));
myLibrary.push(new Book('Tara Westover', 'Educated', 400, true));

const addBookToLibrary = function addBookToLibrary() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pageCt = document.getElementById('page-ct').value;
  let completed = false;
  if (document.getElementById('complete').checked == true) {
    completed = true;
  }

  let book = new Book(author, title, pageCt, completed);
  myLibrary.push(book);
  displayBook(author, title, pageCt, completed);
};

const editBook = function editBook() {
  const editedAuthor = document.getElementById('edit-author').value;
  const editedTitle = document.getElementById('edit-title').value;
  const editedPageCt = document.getElementById('edit-page-ct').value;

  if (myLibrary[editId].author !== editedAuthor) {
    myLibrary[editId].author = editedAuthor;
    document.getElementById(`author${editId}`).textContent = editedAuthor;
  }

  if (myLibrary[editId].title !== editedTitle) {
    myLibrary[editId].title = editedTitle;
    document.getElementById(`title${editId}`).textContent = editedTitle;
  }

  if (myLibrary[editId].pageCt !== editedPageCt) {
    myLibrary[editId].pageCt = editedPageCt;
    document.getElementById(`page-ct${editId}`).textContent = editedPageCt;
  }

  if (myLibrary[editId].completed == true) {
    if (document.getElementById('edit-incomplete').checked == true) {
      myLibrary[editId].completed = false;

      document.getElementById(`completed${editId}`).textContent = '';
    }
  } else {
    if (document.getElementById('edit-complete').checked == true) {
      myLibrary[editId].completed = true;

      document.getElementById(`completed${editId}`).textContent = 'Yes';
    }
  }
};

const deleteBook = function deleteBook() {
  const rowToDelete = document.getElementById(`row${deleteId}`);
  myLibrary.splice(deleteId, 1);
  list.removeChild(rowToDelete);
};

const displayBook = function displayBook(author, title, pageCt, completed) {
  const bookIndex = myLibrary.findIndex((book) => {
    return book.author == author && book.title == title;
  });

  const row = document.createElement('div');
  row.classList.add('row', 'row-cols-5', 'book-row');
  row.id = `row${bookIndex}`;

  const authorCol = document.createElement('div');
  authorCol.classList.add('col-1');
  authorCol.textContent = author;
  authorCol.id = `author${bookIndex}`;

  const titleCol = document.createElement('div');
  titleCol.classList.add('col-2');
  titleCol.textContent = title;
  titleCol.id = `title${bookIndex}`;

  const pageCtCol = document.createElement('div');
  pageCtCol.classList.add('col-3');
  pageCtCol.textContent = pageCt;
  pageCtCol.id = `page-ct${bookIndex}`;

  const completedCol = document.createElement('div');
  completedCol.classList.add('col-4');
  completedCol.id = `completed${bookIndex}`;
  if (completed == true) {
    completedCol.textContent = 'Yes';
  }

  const editCol = document.createElement('div');
  editCol.classList.add('col-5');
  const editIcon = document.createElement('ion-icon');
  editIcon.setAttribute('name', 'create-outline');
  editIcon.setAttribute('data-bs-toggle', 'modal');
  editIcon.setAttribute('data-bs-target', '#edit-book-modal');
  editIcon.classList.add('edit-icon');
  editIcon.id = `edit-book${bookIndex}`;
  editIcon.addEventListener('click', function () {
    editId = bookIndex;
    document.getElementById('edit-author').value = myLibrary[editId].author;
    document.getElementById('edit-title').value = myLibrary[editId].title;
    document.getElementById('edit-page-ct').value = myLibrary[editId].pageCt;
    if (myLibrary[editId].completed == true) {
      document.getElementById('edit-complete').checked = true;
      document.getElementById('edit-incomplete').checked = false;
    } else {
      document.getElementById('edit-complete').checked = false;
      document.getElementById('edit-incomplete').checked = true;
    }
  });

  const deleteIcon = document.createElement('ion-icon');
  deleteIcon.setAttribute('name', 'trash-outline');
  deleteIcon.setAttribute('data-bs-toggle', 'modal');
  deleteIcon.setAttribute('data-bs-target', '#delete-book-modal');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.id = `delete-book${bookIndex}`;
  deleteIcon.addEventListener('click', function () {
    deleteId = bookIndex;
  });

  editCol.appendChild(editIcon);
  editCol.appendChild(deleteIcon);

  row.appendChild(authorCol);
  row.appendChild(titleCol);
  row.appendChild(pageCtCol);
  row.appendChild(completedCol);
  row.appendChild(editCol);
  list.appendChild(row);
};

const updateCount = function updateCount() {
  while (list.childNodes.length > 3) {
    list.removeChild(list.lastChild);
  }

  myLibrary.forEach((book) => {
    displayBook(book.author, book.title, book.pageCt, book.completed);
  });

  const countDisplay = document.getElementById('read-count');
  let totalBooks = myLibrary.length;
  let completedBooks = 0;
  myLibrary.forEach((book) => {
    if (book.completed == true) {
      completedBooks++;
    }
  });
  countDisplay.textContent = `Total Books Read: ${completedBooks} / ${totalBooks}`;
};

myLibrary.forEach((book) => {
  displayBook(book.author, book.title, book.pageCt, book.completed);
});
updateCount();

document.getElementById('add-book-btn').addEventListener('click', function () {
  addBookToLibrary();
  updateCount();
});

document.getElementById('save-book-btn').addEventListener('click', function () {
  editBook();
  updateCount();
});

document.getElementById('confirm-delete-btn').addEventListener('click', function () {
  deleteBook();
  updateCount();
});

// document.getElementById('clear').addEventListener('click', function () {
//   localStorage.clear();
// });
