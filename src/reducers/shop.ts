import { Reducer } from 'redux'
import { Shop } from '../services/gurunavi/models'
import { ShopAction, ShopActionType } from '../actions/shop'

export interface ShopState {
  shop: Shop
}

export const initialState: ShopState = {
  shop: {
    name: "", budget: 0, address: "", url: "", image_url: "",
    pr: "", opentime: "", line: "", station: ""
  }
}

const shopReducer: Reducer<ShopState, ShopAction> = (
  state: ShopState = initialState,
  action: ShopAction
): ShopState => {
  switch (action.type) {
    case ShopActionType.SHOW:
      return {
        ...state,
        shop: action.shop
      }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type

      return state;
    }
  }
}

export default shopReducer
