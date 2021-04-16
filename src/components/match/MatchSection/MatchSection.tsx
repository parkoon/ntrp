import React from 'react'
import styled from 'styled-components'

import MatchCard from '../MatchCard'

function MatchSection() {
  return (
    <Wrapper>
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 12px;
`

export default MatchSection
