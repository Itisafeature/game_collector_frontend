import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gamesReducer from './reducers/gamesReducer';
import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['currentUser'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,
    games: gamesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
