import { createSlice } from '@reduxjs/toolkit';

import { createAsyncThunk } from '@reduxjs/toolkit';

const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
  const response = await fetch('http://localhost:7000/todos');
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newToDo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      // You can do that the mutated way.
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);

      //Or you can do it the unmutated way.
      // return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
