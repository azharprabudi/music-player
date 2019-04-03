import React from "react";
import ReactDOM from "react-dom";
import Homepage from "pages/homepage";
import { Provider } from "react-redux";
import makeStore from "./utils/redux";

ReactDOM.render(
  <Provider store={makeStore()}>
    <Homepage />
  </Provider>,
  document.getElementById("root")
);
