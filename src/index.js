import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./components/App";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
