import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const Store = () => configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default Store;
