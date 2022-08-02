import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./redux/reducers";
import Wrapper from "./components/Wrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = createStore(reducers);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Wrapper>
          <App />
        </Wrapper>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
