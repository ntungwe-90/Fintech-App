import React, { Fragment } from "react";
import Navigator from "./src/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import ProductList from "./src/screens/ProductList";

export default function App(props) {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
