import React, { FC } from 'react'
import { Item, Button, Icon } from 'semantic-ui-react'
import { Shop } from '../services/gurunavi/models'
import '../styles/ShopList.css'

interface ShopListProps {
  shops: Shop[]
  show: (shop: Shop) => void
}

const ShopList: FC<ShopListProps> = ({ shops = [], show = () => {} }) => (
  <div className='list'>
    <Item.Group>
      {shops.map((shop, index) => (
        <Item key={index}>
          <Item.Image size='tiny' src={shop.image_url} />
          <Item.Content>
            <Item.Header as='a' href={shop.url} target='blank' rel='noopenner'>{shop.name}</Item.Header>
            <Item.Meta><Icon name='marker'></Icon>住所：{shop.address}</Item.Meta>
            <Item.Meta><Icon name='yen sign'></Icon>予算：{shop.budget}円</Item.Meta>
          </Item.Content>
          <Item.Extra>
            <Button floated='right' onClick={() => show(shop)}>詳細を見る</Button>
          </Item.Extra>
        </Item>
      ))}
    </Item.Group>
  </div>
)

export default ShopList
