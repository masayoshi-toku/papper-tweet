import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/hotpapperConstants';
import { getShops } from '../actions/hotpapper';
import { getShopsFactory } from '../services/hotpapper/api';

function* runGetShops(action: ReturnType<typeof getShops.start>) {
  const { shopName } = action.payload;

  try {
    const api = getShopsFactory();
    const shops = yield call(api, shopName);

    yield put(getShops.succeed({ shopName }, { shops }));
  } catch (error) {
    yield put(getShops.fail({ shopName }, error));
  }
}

export function* watchGetShops() {
  yield takeLatest(Action.GET_SHOPS_START, runGetShops);
}

export default function* rootSaga() {
  yield all([fork(watchGetShops)]);
}
