import React from 'react'
import { FaCheck } from 'react-icons/fa'

import { Wrapper, Box, Thumb, DoneIconWrapper } from './styled'

type ProgressType = {
  percent: number
}
function Progress({ percent }: ProgressType) {
  const isDone = percent === 100
  return (
    <Wrapper>
      <Box>
        <Thumb percent={percent} />
      </Box>

      {isDone && (
        <DoneIconWrapper>
          <FaCheck color="#fff" size="12" />
        </DoneIconWrapper>
      )}
    </Wrapper>
  )
}

export default Progress
