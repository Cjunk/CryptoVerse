import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import "antd/dist/antd.css";
const root = ReactDOM.createRoot(document.getElementById("root")); //BUG: HACK: ISSUE: TODO: FIXME: bug: DOME: 
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}> {/* wrap the app so every component has access to the store variables */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
