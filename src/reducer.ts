import { Reducer } from 'redux';
import { AxiosError } from 'axios';
import { GurunaviAction } from './actions/gurunavi'
import * as ActionType from './actions/gurunaviConstants'
import { Shop } from './services/gurunavi/models'

export interface GurunaviState {
  shops: Shop[]
  error?: AxiosError | null
}

const initialState: GurunaviState = {
  shops: [],
}

const gurunaviReducer: Reducer<GurunaviState, GurunaviAction> = (
  state: GurunaviState = initialState,
  action: GurunaviAction,
): GurunaviState => {
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

export default gurunaviReducer
