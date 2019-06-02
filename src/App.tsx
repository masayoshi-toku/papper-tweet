import React, { FC } from 'react'
import SearchForm from './containers/SearchForm'
import ShopList from './containers/ShopList'
import ShopDetail from './containers/ShopDetail'

import './App.css'
import { Header, Icon } from 'semantic-ui-react'

const App: FC = () => (
  <>
    <Header as='h2' className='top-header'>
      <Icon name='food'></Icon>
      <Header.Content>PapperTweet</Header.Content>
    </Header>
    <SearchForm />
    <div className='shop-info'>
      <ShopList />
      <ShopDetail />
    </div>
  </>
)

export default App
