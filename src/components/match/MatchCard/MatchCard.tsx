import React from 'react'
import styled from 'styled-components'

import Description from '@Components/atomic/Description/Description'

function MatchCard() {
  return (
    <Wrapper>
      <span>14:00 ~ 15:00</span>

      <div>
        <Title>덕소 월문천 테니스장</Title>
        <div>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
          <Tag>정보</Tag>
        </div>
      </div>

      <Status>마감임박</Status>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding: 12px;

  display: grid;
  grid-template-columns: 120px 1fr 92px;

  width: 100%;

  font-size: 16px;
  align-items: center;
`

const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 17px;
`

const Tag = styled.span`
  font-size: 14px;
  position: relative;
  margin-right: 12px;

  color: ${({ theme }) => theme.color.darkGrey};

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      top: 3px;
      bottom: 3px;
      left: 100%;
      border-right: 1px solid ${({ theme }) => theme.color.darkGrey};
      margin-left: 6px;
    }
  }
`

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.error};
  font-size: 15px;
  font-weight: bold;
  padding: 12px 20px;
`

export default MatchCard
