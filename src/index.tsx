import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './routes'
import { AppProvider } from './data/context/ApiContext'
import Global from './ui/global'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
       <Global />
       <Rotas />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


