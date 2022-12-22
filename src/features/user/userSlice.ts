import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from './types';
import {InitialUserState} from './types';

const initialState: InitialUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeCurrentUser(state, action: PayloadAction<User>) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const {storeCurrentUser} = userSlice.actions;

export default userSlice.reducer;
