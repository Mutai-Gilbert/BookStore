import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 1,
    item_name: 'Beyond Order',
    item_author: 'Jordan Peterson',
  },
  {
    item_id: 2,
    item_name: 'Maps of Meaning',
    item_author: 'Jordan Peterson',
  },
  {
    item_id: 3,
    item_name: '12 Rules for Life',
    item_author: 'Jordan Peterson',
  },
  {
    item_id: 4,
    item_name: 'Sapiens',
    item_author: 'Yuval Harrari',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
