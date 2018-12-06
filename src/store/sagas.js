import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getKoalas(action) {
  try {
      // need to send the action.payload to the /api/giphy
      const response = yield call(axios.get, '/api/koalas')
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
  // yield takeEvery('DELETE_KOALA', deleteKoala);  
  // yield takeEvery('UPDATE_ORDER', updatePlantOrder)
}

export default rootSaga;
