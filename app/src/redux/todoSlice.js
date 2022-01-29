import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1', complete: false },
    { id: 2, title: 'todo2', complete: false },
    { id: 3, title: 'todo3', complete: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        title: action.payload.title,
        complete: false,
      };
      state.push(newToDo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
