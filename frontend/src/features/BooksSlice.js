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

//Create new book
export const createBook = createAsyncThunk(
  'books/create', //nom de l'action redux
  async (bookData, thunkAPI) => {
    try {
      console.log('slice bookData : ', bookData);

      return await bookService.addBook(bookData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user books
export const getAllBooks = createAsyncThunk(
  'books/getAll',
  async (thunkAPI) => {
    try {
      return await bookService.getBooks();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Update  book
export const updateBook = createAsyncThunk(
  'books/update', //nom de l'action redux
  async ({ id, bookData }, thunkAPI) => {
    // ajout des {}
    try {
      console.log('slice bookDataId : ', id);
      console.log('slice bookData : ', bookData);

      return await bookService.updateBook(id, bookData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete book
export const destroyBook = createAsyncThunk(
  'books/delete', //nom de l'action redux
  async (id, thunkAPI) => {
    try {
      return await bookService.deleteBook(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const BooksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    // getBooks: (state) => {
    //   //marche sans
    //   return state.books;
    // },
    // addBook: (state, action) => {
    //   const book = action.payload;
    //   state.books.unshift(book); // au lieu de push (au début du tableau au lieu de la fin)
    // },
    // // detailsBook: (state, action) => {
    // //   const bookId = action.payload.id;
    // //   state.books = state.books.find((book) => book.id === bookId);
    // // },
    // // detailsBook: (state, action) => {}, //inutile
    // deleteBook: (state, action) => {
    //   const bookId = action.payload.id;
    //   state.books = state.books.filter((book) => book.id !== bookId);
    // },
    // updateBook: (state, action) => {
    //   const book = action.payload;
    //   const bookId = action.payload.id;
    //   state.books = state.books.map((b) => (b.id === bookId ? book : b));
    // },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload); //voir unshift
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.books = state.books.map(
          (book) => (book._id === action.payload._id ? action.payload : book) //the payload contient le book updated; sinon le book si pas de modification
        );
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(destroyBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(destroyBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id // la fonction delete backend renvoie l'id du livre supprimé (id contenu dans action.payload.id )
        );
      })
      .addCase(destroyBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const { getBooks, addBook, deleteBook /*updateBook*/ } =
//   BooksSlice.actions;
export default BooksSlice.reducer;

// nota : pas besoin d'esport les extra-reducers comme les reducers classiques
