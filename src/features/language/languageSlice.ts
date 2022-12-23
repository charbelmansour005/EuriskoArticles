import {createSlice} from '@reduxjs/toolkit';
import {LanguageState} from './types';

const initialState: LanguageState = {
  // providing 2 language options
  english: true,
};

export const languageSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    toggleLanguage: state => {
      state.english = !state.english;
    },
  },
});

export const {toggleLanguage} = languageSlice.actions;

export default languageSlice.reducer;
