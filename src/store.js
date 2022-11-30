import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./combineReducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persist-store",
  storage: storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const INITIAL_STATE = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
  : compose;

const store = createStore(
  persistedReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export default store;