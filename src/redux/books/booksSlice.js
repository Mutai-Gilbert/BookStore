import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
};

const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmHBlH9icvMuSf2R7xNo/books');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed, Try again!');
  }
});

const addBook = createAsyncThunk('books/addBook', async (bookInfo, thunkAPI) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmHBlH9icvMuSf2R7xNo/books', bookInfo);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed, Try again!');
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId, thunkAPI) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmHBlH9icvMuSf2R7xNo/books/${bookId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed, Try again!');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
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
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        isLoading: false,
      }))
      .addCase(addBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBook.fulfilled, (state, action) => {
        const newBooksList = state.books.filter((book) => book.item_id !== action.payload.id);
        return {
          ...state,
          books: newBooksList,
          isLoading: true,
        };
      })
      .addCase(removeBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export { getBooks, addBook, removeBook };
export default booksSlice.reducer;
