import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { SearchContextProvider } from "./store/searchContext";
import { AllTodosContextProvider } from "./store/allTodos-context";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <SearchContextProvider>
    <AllTodosContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllTodosContextProvider>
  </SearchContextProvider>
);
