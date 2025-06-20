import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

// const root = ReactDOM.createRoot(document.getElementById("root"))
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
