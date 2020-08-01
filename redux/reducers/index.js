import { combineReducers } from "redux";
import user from "./userReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['user'], // what slices of the store we want to persist
}


const rootReducer = combineReducers({
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer
