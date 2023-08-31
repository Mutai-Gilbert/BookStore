import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
};

const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/enAq4PLNmVjCpl0q9LzN/books');
  return response.data;
});

const addBook = createAsyncThunk('books/addBook', async (bookInfo) => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/enAq4PLNmVjCpl0q9LzN/books', bookInfo);
  if (response.data && response.data === 'Created') {
    return { ...bookInfo, id: bookInfo.item_id };
  }
  return null;
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/enAq4PLNmVjCpl0q9LzN/books/${bookId}`);
  return { bookId };
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
        const { bookId } = action.payload;
        if (!bookId || !bookId.id) {
          return state;
        }
        const filteredBooks = state.books.filter((book) => book.id !== bookId.id);

        return {
          ...state,
          books: filteredBooks,
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
