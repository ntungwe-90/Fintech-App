import React, { Fragment } from "react";
import Navigator from './src/Navigator';
import { connect, Provider } from "react-redux";
import store from "./src/redux/store";

export default function App(props) {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

