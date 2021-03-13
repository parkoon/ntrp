import React from 'react'

import TagContainer from './TagContainer'
import { Wrapper } from './styled'

type TagType = {
  title: string
  style?: React.CSSProperties
}
function Tag({ title, ...props }: TagType) {
  return <Wrapper {...props}>{title}</Wrapper>
}

Tag.TagContainer = TagContainer

export default Tag
