import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './routes'
import { AppProvider } from './data/context/ApiContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
       <Rotas />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


