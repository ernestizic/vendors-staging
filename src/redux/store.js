import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import alertReducer from './slices/alertSlice';
import storeReducer from './slices/storeSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    store: storeReducer,
  });

const persistConfig = {
	key: 'giftlyVendors:root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)
