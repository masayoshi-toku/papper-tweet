import React, { FC, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RouteComponentProps, withRouter } from 'react-router'

import SearchForm from '../components/SearchForm'
import { getShops } from '../actions/gurunavi'

interface DispatchProps {
  getShopsStart: (shopName: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getShopsStart: shopName => dispatch(getShops.start({ shopName })),
})

type EnhancedSearchFormProps = DispatchProps
  & RouteComponentProps<{ shopName: string }>

const SearchFormContainer: FC<EnhancedSearchFormProps> = ({
  getShopsStart,
}) => {
  const [word, setWord] = useState("")

  return (
    <SearchForm word={word} setWord={setWord} getShopsStart={getShopsStart} />
  )
}

export default withRouter(connect(null, mapDispatchToProps)(SearchFormContainer))
