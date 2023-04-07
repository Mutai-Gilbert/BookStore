import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmHBlH9icvMuSf2R7xNo/books');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed, Try again!');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (bookInfo, thunkAPI) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmHBlH9icvMuSf2R7xNo/books', bookInfo);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed, Try again!');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmHBlH9icvMuSf2R7xNo/books/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed, Try again!');
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }))
      .addCase(removeBook.fulfilled, (state, action) => {
        const newBookList = state.books.filter((book) => book.item_id !== action.payload);
        return {
          ...state,
          books: newBookList,
          isLoading: true,
        };
      });
  },
});
export default booksSlice.reducer;
