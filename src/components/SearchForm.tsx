import React, { FC, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../styles/SearchForm.css'

interface SearchFormProps {
  word: string
  setWord: Dispatch<SetStateAction<string>>
  getShopsStart: (word: string) => void
}

const SearchForm: FC<SearchFormProps> = ({
  word = "",
  setWord = () => {},
  getShopsStart = () => {},
}) => (
  <div className='search-form'>
    <Form size='small'>
      <Form.Input label='キーワード検索' value={word} onChange={(e: ChangeEvent<HTMLInputElement>) => setWord(e.currentTarget.value)} width={4} placeholder='新宿 ラーメン' />
      <Button type='submit' onClick={() => getShopsStart(word)}>検索</Button>
    </Form>
  </div>
)

export default SearchForm
