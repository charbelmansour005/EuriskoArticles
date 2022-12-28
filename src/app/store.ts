import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import articleReducer from '../features/article/articlesSlice'
import languageReducer from '../features/language/languageSlice'

const rootReducer = combineReducers({
  user: userReducer,
  articles: articleReducer,
  language: languageReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: rootReducer,
})

export default store
