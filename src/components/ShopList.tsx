import React, { FC } from 'react'
import { Item } from 'semantic-ui-react'
import { Shop } from '../services/gurunavi/models'

interface ShopListProps {
  shops: Shop[]
}

const ShopList: FC<ShopListProps> = ({ shops = [] }) => (
  <>
    <Item.Group>
      {shops.map((shop, index) => (
        <Item key={index}>
          <Item.Image size='tiny' src={shop.image_url} />
          <Item.Content>
            <Item.Header as='a' href={shop.url} target='blank' rel='noopenner'>{shop.name}</Item.Header>
            <Item.Meta>住所：{shop.address}</Item.Meta>
            <Item.Meta>予算：{shop.budget}円</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
)

export default ShopList
