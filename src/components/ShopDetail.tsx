import React, { FC } from 'react'
import { Shop } from '../services/gurunavi/models'
import { Item, Icon } from 'semantic-ui-react'
import { initialState } from '../reducers/shop'
import '../styles/ShopDetail.css'

interface ShopDetailProps {
  shop: Shop
}

const ShopDetail: FC<ShopDetailProps> = ({
  shop = initialState.shop
}) => {
  return ((shop.name !== '') ? (
    <div className='detail'>
      <Item.Group>
      <Item.Image size='tiny' src={shop.image_url} />
      <Item.Content>
        <Item.Header as='a' href={shop.url} target='blank' rel='noopenner'>{shop.name}</Item.Header>
        <Item.Meta><Icon name='marker'></Icon>住所：{shop.address}</Item.Meta>
        <Item.Meta><Icon name='yen sign'></Icon>予算：{shop.budget}円</Item.Meta>
        <Item.Meta><Icon name='thumbs up outline'></Icon>PR：{shop.pr}</Item.Meta>
        <Item.Meta><Icon name='clock outline'></Icon>営業時間：{shop.opentime}</Item.Meta>
        <Item.Meta><Icon name='train'></Icon>最寄駅：{shop.line}{shop.station}</Item.Meta>
      </Item.Content>
    </Item.Group>
  </div>
  ) : null)
}

export default ShopDetail
