import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookService from './bookService';
// import { BooksData } from '../FakeData';

const initialState = {
  books: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Get user books
export const getBooks_ = createAsyncThunk('books/getAll', async (thunkAPI) => {
  try {
    return await bookService.getBooks();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const BooksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    // getBooks: (state) => {
    //   //marche sans
    //   return state.books;
    // },
    //   addBook: (state, action) => {
    //     const book = action.payload;
    //     state.books.unshift(book); // au lieu de push (au début du tableau au lieu de la fin)
    //   },
    //   // detailsBook: (state, action) => {
    //   //   const bookId = action.payload.id;
    //   //   state.books = state.books.find((book) => book.id === bookId);
    //   // },
    //   detailsBook: (state, action) => {}, //inutile
    //   deleteBook: (state, action) => {
    //     const bookId = action.payload.id;
    //     state.books = state.books.filter((book) => book.id !== bookId);
    //   },
    //   updateBook: (state, action) => {
    //     const book = action.payload;
    //     const bookId = action.payload.id;
    //     state.books = state.books.map((b) => (b.id === bookId ? book : b));
    //   },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { getBooks, addBook, detailsBook, deleteBook, updateBook } =
  BooksSlice.actions;
export default BooksSlice.reducer;
