import React from 'react'
import { FaCheck } from 'react-icons/fa'

import { Wrapper, Box, Thumb, DoneIconWrapper } from './styled'

type ProgressType = {
  percent: number
}
function Progress({ percent }: ProgressType) {
  const done = false
  return (
    <Wrapper>
      <Box>
        <Thumb percent={percent} />
      </Box>
      <DoneIconWrapper>
        <FaCheck color="#fff" size="12" />
      </DoneIconWrapper>
    </Wrapper>
  )
}

export default Progress
