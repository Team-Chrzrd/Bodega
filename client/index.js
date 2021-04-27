import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import store from "./store/store.js";
import App from "./components/App.jsx";
import "tailwindcss/tailwind.css";
import "./styling/application.scss";
import "./styling/bootstrap.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
