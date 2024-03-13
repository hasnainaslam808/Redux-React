import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import {thunk}from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
  };


  const persistedReducer = persistReducer(persistConfig, reducers);
  export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
  );
// export const store = createStore(reducers,{},applyMiddleware(thunk))

export const persistor = persistStore(store);
