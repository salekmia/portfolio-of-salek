import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import App from './App';
import GlobalStyle from './style/GlobalStyle';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

