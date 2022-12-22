import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Article} from './types';
import {InitialArticleState} from './types';

const initialState: InitialArticleState = {
  articles: [],
  filteredArticles: [],
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    storeArticles(state, action: PayloadAction<Article[]>) {
      state.articles = {
        ...state.articles,
        ...action.payload,
      };
    },

    storeFilteredArticles(state, action: PayloadAction<Article[]>) {
      state.filteredArticles = {
        ...state.filteredArticles,
        ...action.payload,
      };
    },
  },
});

export const {storeArticles, storeFilteredArticles} = articleSlice.actions;

export default articleSlice.reducer;
