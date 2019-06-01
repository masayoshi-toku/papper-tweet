import React, { FC, useState } from 'react'
import SearchForm from '../components/SearchForm'

const SearchFormContainer: FC = () => {
  const [word, setWord] = useState("")

  return (
    <SearchForm word={word} setWord={setWord} />
  )
}

export default SearchFormContainer
