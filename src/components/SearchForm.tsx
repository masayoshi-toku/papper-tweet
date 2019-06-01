import React, { FC, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button, Form } from 'semantic-ui-react'

interface SearchFormProps {
  word: string
  setWord: Dispatch<SetStateAction<string>>
  getShopsStart: (shopName: string) => void
}

const SearchForm: FC<SearchFormProps> = ({
  word = "",
  setWord = () => {},
  getShopsStart = () => {},
}) => (
  <>
    <Form size='small'>
      <Form.Input label='キーワード検索' value={word} onChange={(e: ChangeEvent<HTMLInputElement>) => setWord(e.currentTarget.value)} width={4} />
      <Button type='submit' onClick={() => getShopsStart(word)}>検索</Button>
    </Form>
  </>
)

export default SearchForm
