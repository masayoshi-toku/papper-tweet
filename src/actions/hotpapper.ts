import { AxiosError } from 'axios'
import { Shop } from '../services/hotpapper/models'
import * as ActionType from './hotpapperConstants'

interface GetShopParams {
  shopName: string
}

interface GetShopsResult {
  shops: Shop[]
}

export const getShops = {
  start: (params: GetShopParams) => ({
    type: ActionType.GET_SHOPS_START as typeof ActionType.GET_SHOPS_START,
    payload: params,
  }),

  succeed: (params: GetShopParams, result: GetShopsResult) => ({
    type: ActionType.GET_SHOPS_SUCCEED as typeof ActionType.GET_SHOPS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetShopParams, error: AxiosError) => ({
    type: ActionType.GET_SHOPS_FAIL as typeof ActionType.GET_SHOPS_FAIL,
    payload: { params, error },
    error: true,
  }),
}

export type HotPapperAction =
  | ReturnType<typeof getShops.start>
  | ReturnType<typeof getShops.succeed>
  | ReturnType<typeof getShops.fail>
