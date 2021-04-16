import React, { useEffect } from 'react'
import styled from 'styled-components'

import { SearchInput } from '@Components/atomic/Input'
import RangeSlider from '@Components/atomic/RangeSlider'
import BaseLayout from '@Components/layout/BaseLayout'

declare global {
  interface Window {
    kakao: any
  }
}

function Match() {
  useEffect(() => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map')

      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      }

      console.log('mapOption', mapOption)
      new window.kakao.maps.Map(mapContainer, mapOption)
    })
  }, [])
  return (
    <BaseLayout column>
      <Filter>
        <Search>
          <SearchInput />
        </Search>
        <div>
          <RangeSlider
            min={0}
            max={100}
            onComplete={(value) => console.log('slider completed : ', value)}
          />
        </div>
      </Filter>
      {/* <Wrapper> */}
      <Content>
        <ColumnT>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
          <TestBox>1</TestBox>
        </ColumnT>
        <Column>
          <TestBox2>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>
          </TestBox2>
        </Column>
      </Content>
      {/* </Wrapper> */}
    </BaseLayout>
  )
}

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  padding: 0 12px;
`
const Filter = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  flex: 0 0 62px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`

const TestBox = styled.div`
  height: 100px;
`
const TestBox2 = styled.div`
  height: 100%;
`

const Content = styled.main`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 400px 1fr;
`

const Column = styled.div``
const ColumnT = styled.div`
  overflow-y: scroll;
`

export default Match
