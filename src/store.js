import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gamesReducer from './reducers/gamesReducer';
import userReducer from './reducers/userReducer';

const persistConfigUsers = {
  key: 'user',
  storage,
  whitelist: ['currentUser'],
};

const persistConfigGames = {
  key: 'game',
  storage,
  whitelist: ['allGames'],
};

const persistedUsersReducer = persistReducer(persistConfigUsers, userReducer);
const persistedGamesReducer = persistReducer(persistConfigGames, gamesReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    games: persistedGamesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
