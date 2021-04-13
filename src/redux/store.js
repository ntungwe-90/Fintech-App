import { createStore, compose, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
// import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const store = createStore(reducer, applyMiddleware(thunk));

// const persistedReducer = persistReducer(persistConfig, reducer);

// let store = createStore(persistedReducer, applyMiddleware(thunk));

// let persistor = persistStore(store);

export { 
    store, 
    // persistor 
};
