import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExerciseQuery } from 'querys/exercise';
interface InitialState {
  exercise: ExerciseQuery[];
}

const initialState: InitialState = {
  exercise: [],
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: initialState,
  reducers: {
    addExercise(state, action: PayloadAction<ExerciseQuery>) {
      state.exercise.push(action.payload);
    },
    removeExercise(state, action: PayloadAction<string>) {
      state.exercise = state.exercise.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    editExercise(state, action: PayloadAction<ExerciseQuery>) {
      state.exercise = state.exercise.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });
    },
    fillExercise(state, action: PayloadAction<ExerciseQuery[]>) {
      state.exercise = action.payload;
    },
  },
});

export const { addExercise, removeExercise, editExercise, fillExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;
