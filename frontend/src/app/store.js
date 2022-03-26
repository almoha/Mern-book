import { configureStore } from '@reduxjs/toolkit';

import BooksReducer from '../features/BooksSlice';

export const store = configureStore({
  reducer: {
    booksReducer: BooksReducer,
  },
});
