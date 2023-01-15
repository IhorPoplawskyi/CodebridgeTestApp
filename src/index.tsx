import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { setupStore } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore()}>
      <App />
  </Provider>
);
