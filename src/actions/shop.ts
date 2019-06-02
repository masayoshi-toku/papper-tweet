import { Shop } from '../services/gurunavi/models'

export enum ShopActionType {
  SHOW = 'SHOW'
}

export interface ShopAction {
  type: ShopActionType
  shop: Shop
}

export const show = (shop: Shop): ShopAction => ({
  type: ShopActionType.SHOW,
  shop: shop
})
