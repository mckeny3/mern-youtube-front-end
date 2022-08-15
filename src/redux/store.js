import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "./index.js";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
