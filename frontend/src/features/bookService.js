import axios from 'axios';

// const API_URL = '/api/books/'; //voir proxy dans package.json
const API_URL = 'http://localhost:5000/api/books/';
//

// Create new book
const addBook = async (bookData) => {
  const response = await axios.post(API_URL, bookData);
  console.log('axios service bookData: ', bookData);
  console.log('axios service : ', response.data);
  return response.data;
};

// Get user books
const getBooks = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Get détail book
const getOneBook = async (bookId) => {
  const response = await axios.get(API_URL + bookId);

  return response.data;
};

// Update user book
const updateBook = async (bookId, bookData) => {
  console.log('axios service bookId: ', bookId);
  console.log('axios service bookData: ', bookData);
  const response = await axios.put(API_URL + bookId, bookData);
  console.log('axios service : ', response.data);
  return response.data;
};

// Delete user book
const deleteBook = async (bookId) => {
  const response = await axios.delete(API_URL + bookId);

  return response.data;
};

const bookService = {
  getBooks,
  getOneBook,
  addBook,
  deleteBook,
  updateBook,
};
export default bookService;

// avoir pour le port
