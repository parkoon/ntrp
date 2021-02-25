import { MouseEvent } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Item, ItemIconWrapper, ItemTitle } from './styled'

type AnswerItemProps = {
  answer: { id: number; title: string }
  checked: boolean
  onClick(e: MouseEvent): void
}
function AnswerItem({ answer, ...props }: AnswerItemProps) {
  const { id, title } = answer

  return (
    <Item {...props}>
      <ItemIconWrapper>
        <FaCheck color="#fff" />
      </ItemIconWrapper>
      <ItemTitle>{title}</ItemTitle>
    </Item>
  )
}

export default AnswerItem
