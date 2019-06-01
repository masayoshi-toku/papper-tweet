import React, { FC } from 'react'
import './App.css'

import SearchForm from './containers/SearchForm'
import ShopList from './containers/ShopList'

const App: FC = () => (
  <>
    <ShopList />
    <SearchForm />
  </>
)

export default App
