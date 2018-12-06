import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* getKoalas(action) {
  try {
      // need to send the action.payload to the /api/giphy
      const response = yield call(axios.get, '/koalas')
      console.log('api koalas call', response);
      yield put ( {type: 'PUT_KOALAS', payload: response.data });
  }
  catch (error) {
        console.log('error with get request to /api/koalas', error);
  }
}

function* addKoala(action) {
  console.log('in post saga for adding a koala', action.payload);
  try {
      // axios asynch call to add koala to server
      yield call(axios.post, '/api/koalas', action.payload);
      yield put( { type: 'GET_KOALAS' } );
  }
  catch (error) {
      console.log('error with add post request to /api/koalas');
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('GET_KOALAS', getKoalas);
  yield takeEvery('ADD_KOALA', addKoala);
  // yield takeEvery('DELETE_PLANT', deletePlant);  
  // yield takeEvery('UPDATE_ORDER', updatePlantOrder)
}

// This function (our reducer) will be called when an 
// action is dipatched. 
const koalaList = (state = [], action) => {
  switch (action.type) {
      case 'PUT_KOALAS':
          return action.payload;
      default:
          return state;
  }
}

const store = createStore(
  combineReducers({
    koalaList,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


