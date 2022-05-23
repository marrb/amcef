import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { FinishedContextProvider } from './store/finished-context';
import { ActiveContextProvider } from './store/active-context';
import { SearchContextProvider } from './store/searchContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <SearchContextProvider>
    <ActiveContextProvider>
      <FinishedContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FinishedContextProvider>
    </ActiveContextProvider>
  </SearchContextProvider>
);