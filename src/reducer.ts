import { Reducer } from 'redux';
import { AxiosError } from 'axios';
import { HotPapperAction } from './actions/hotpapper'
import * as ActionType from './actions/hotpapperConstants'
import { Shop } from './services/hotpapper/models'

export interface HotPapperState {
  shops: Shop[]
  error?: AxiosError | null
}

const initialState: HotPapperState = {
  shops: [],
}

const hotPapperReducer: Reducer<HotPapperState, HotPapperAction> = (
  state: HotPapperState = initialState,
  action: HotPapperAction,
): HotPapperState => {
  switch (action.type) {
    case ActionType.GET_SHOPS_START:
      return {
        ...state,
        shops: [],
      }
    case ActionType.GET_SHOPS_SUCCEED:
      return {
        ...state,
        shops: action.payload.result.shops,
      }
    case ActionType.GET_SHOPS_FAIL:
      return {
        ...state,
        shops: [],
        error: action.payload.error
      }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
}

export default hotPapperReducer
