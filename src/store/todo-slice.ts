import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'components/dashboard/Todo';

type TaskState = {
  list: Partial<Todo>[];
};

const initialState: TaskState = { list: [] };

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Partial<Todo>>) {
      state.list.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
