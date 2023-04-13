import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
);
