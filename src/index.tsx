import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={setupStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
