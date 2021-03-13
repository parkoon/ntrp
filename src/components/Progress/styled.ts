import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 18px;
`
export const Box = styled.div`
  flex: 1;
  height: 12px;
  background-color: ${(props) => props.theme.color.lightGrey};
  border-radius: 100px;
  margin-right: 7px;
`
export const Thumb = styled.div<{ percent: number }>`
  width: ${(props) => `${props.percent}%`};
  height: 100%;
  border-radius: 100px;

  background-color: ${(props) => props.theme.color.main};
`

export const DoneIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.color.main};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
