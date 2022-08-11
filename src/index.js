import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
import { MeetupsContextProvider } from './store/meetups-context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <MeetupsContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </MeetupsContextProvider>
);
