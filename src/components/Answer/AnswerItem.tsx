import { MouseEvent } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Item, ItemIconWrapper, ItemTitle } from './styled'

type AnswerItemProps = {
  title: string
  checked: boolean
  onClick(e: MouseEvent): void
}
function AnswerItem({ title, ...props }: AnswerItemProps) {
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
