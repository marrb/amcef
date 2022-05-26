import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { SearchContextProvider } from './store/searchContext';
import { AllTodosContextProvider } from './store/allTodos-context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <SearchContextProvider>
    <AllTodosContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllTodosContextProvider>
  </SearchContextProvider>
);