import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from 'components/auth/Login';

interface InitialState extends UserResponse {
  isUser: boolean;
}

const initialState: InitialState = {
  name: '',
  id: '',
  login: '',
  isUser: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialState,
  },
  reducers: {
    setToken(state, action: PayloadAction<UserResponse>) {
      const user = { ...action.payload, isUser: true };
      state.user = user;
    },
    removeUser(state) {
      state.user = initialState;
    },
  },
});

export const { setToken, removeUser } = userSlice.actions;

export default userSlice.reducer;
