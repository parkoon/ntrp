import { createPortal } from 'react-dom'
import styled, { keyframes } from 'styled-components'

import media from '@Assets/styles/media'

import { useModal } from './context'
import register from './register'

function ModalContainer() {
  const { modalPayload, closeModal } = useModal()

  if (!modalPayload) return null

  const ModalComponent = register[modalPayload.type]

  const target = document.getElementById('modal') || document.body
  return createPortal(
    <Overlay onClick={closeModal}>
      <Wrapper>
        <ModalComponent {...modalPayload.props!} close={closeModal} />
      </Wrapper>
    </Overlay>,
    target
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`

const FadeIn = keyframes`
  from {
    transform: translateY(70px);
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  to {
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  position: relative;
  animation: ${FadeIn} 0.3s;
`

export default ModalContainer
