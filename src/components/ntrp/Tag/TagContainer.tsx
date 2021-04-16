import React, { Children } from 'react'

import { Container } from './styled'

type TagContainerProps = {
  children: React.ReactNode
}
function Tag({ children }: TagContainerProps) {
  return (
    <Container>
      {Children.map(children, (child, index) => {
        console.log(Children.toArray(children).length, index)
        return React.cloneElement(child as React.ReactElement, {
          style:
            Children.toArray(children).length === index + 1
              ? { marginRight: 0 }
              : { marginRight: 7 },
        })
      })}
    </Container>
  )
}

export default Tag
