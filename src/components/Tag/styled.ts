import styled from 'styled-components'

export const Wrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  text-align: center;
  background: ${(props) => props.theme.color.main};

  padding: 10px 14px;
  border-radius: 100px;

  font-size: 14px;
  color: #fff;
`

export const Container = styled.div``
