import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import App from './App'
import hotPapperReducer from './reducer';
import rootSaga from './sagas/hotpapper';
import * as serviceWorker from './serviceWorker'

import './index.css'
import './styles/semantic.min.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(hotPapperReducer, applyMiddleware(sagaMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
sagaMiddleware.run(rootSaga)
