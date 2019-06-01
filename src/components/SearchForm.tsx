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
      <Form.Field control='textarea' rows='3' label='テキスト' value={word} onChange={(e: ChangeEvent<HTMLInputElement>) => setWord(e.currentTarget.value)} width={6} />
      <Button type='submit' onClick={() => getShopsStart(word)}>投稿する</Button>
    </Form>
  </>
)

export default SearchForm
