import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer_index from './Data/Reducers/reducer_index';

const store = createStore(reducer_index,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={store}>
          <App />
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
);