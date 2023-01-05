import { configureStore } from '@reduxjs/toolkit';
import exerciseSlice from './exercise-slice';
import todoReducer from './todo-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: { todos: todoReducer, user: userReducer, exercise: exerciseSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
