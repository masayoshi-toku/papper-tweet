import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/gurunaviConstants';
import { getShops } from '../actions/gurunavi';
import { getShopsFactory } from '../services/gurunavi/api';

function* runGetShops(action: ReturnType<typeof getShops.start>) {
  const { word } = action.payload;

  try {
    const api = getShopsFactory();
    const shops = yield call(api, word);

    yield put(getShops.succeed({ word }, { shops }));
  } catch (error) {
    yield put(getShops.fail({ word }, error));
  }
}

export function* watchGetShops() {
  yield takeLatest(Action.GET_SHOPS_START, runGetShops);
}

export default function* rootSaga() {
  yield all([fork(watchGetShops)]);
}
