import React from 'react'

import { Wrapper } from './styled'

type TagType = {
  title: string
}
function Tag({ title }: TagType) {
  return <Wrapper>{title}</Wrapper>
}

export default Tag
