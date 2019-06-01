import axios from 'axios'
import { Shop } from './models'

interface ApiConfig {
  baseURL: string
  timeout: number
}

const DEFAULT_API_CONFIG = {
  baseURL: "https://api.gnavi.co.jp/RestSearchAPI/v3",
  timeout: 7000,
}

export const getShopsFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    optionConfig,
  }

  const instance = axios.create(config)

  const getShops = async (shopName: string) => {
    try {
      // You should add your own key here
      const response = await instance.get(`?keyid=&name=${shopName}`)

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      const shops: Shop[] = response.data.rest.map((data: any) => (
        { name: data.name, budget: data.budget, address: data.address, url: data.url, image_url: data.image_url.shop_image1  }
      ))

      return shops
    } catch(err) {
      throw err
    }
  }

  return getShops
}
