import { utilService } from "../../../services/util-Service.js";
import { storageService } from "../../../services/async-storage-service.js";



const BOOKS_KEY = 'BOOKSDB';
_createbooks();

export const bookService = {
    query,
    remove,
    saveBook,
    getNewBook,
    get,
    getEmptyReview,
    addReview,
    removeReview,

};

function query() {
    return storageService.query(BOOKS_KEY)
}

function remove(bookId) {
    return storageService.remove(BOOKS_KEY,bookId)
    
}

function get(bookId) {
    return storageService.get(BOOKS_KEY, bookId)
}

function saveBook(book) {
    if (book.id) return storageService.put(BOOKS_KEY, book)
    else return storageService.post(BOOKS_KEY, book)

}

function getNewBook() {
    return { 
        id: utilService.makeId(),
        name:null,
        price:null  
    };
}


function _createbooks() {
  let books = utilService.loadFromStorage(BOOKS_KEY);
  if (!books || !books.length) {
      books = new Request('/js/services/books.json')
      fetch(books)
          .then(book => book.json())
          .then(books=>utilService.saveToStorage(BOOKS_KEY, books))        
  }
  return books;
}



function getEmptyReview() {
    return {
      name: '',
      rate: '',
      readingDate: '',
      bookReview: ''
    }
  }
  
  function addReview(bookId, review) {
    review.id = utilService.makeId()
    return get(bookId)
      .then(book => {
        if (!book.reviews) book.reviews = []
        book.reviews.push(review)
        return storageService.put(BOOKS_KEY, book)
      })
  }
  
  function removeReview(bookId, reviewId) {
    return get(bookId)
      .then(book => {
        const idx = book.reviews.findIndex(review => review.id === reviewId)
        book.reviews.splice(idx, 1)
        return storageService.put(BOOKS_KEY, book)
      })
  }