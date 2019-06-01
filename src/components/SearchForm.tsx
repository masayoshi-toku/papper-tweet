import React, { FC, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button, Form } from 'semantic-ui-react'

interface SearchFormProps {
  word: string
  setWord: Dispatch<SetStateAction<string>>
}

const SearchForm: FC<SearchFormProps> = ({
  word = "",
  setWord = () => {}
}) => (
  <>
    <Form size='small'>
      <Form.Field control='textarea' rows='3' label='テキスト' value={word} onChange={(e: ChangeEvent<HTMLInputElement>) => setWord(e.currentTarget.value)} width={6} />
      <Button type='submit'>投稿する</Button>
    </Form>
  </>
)

export default SearchForm
