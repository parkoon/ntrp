import { createContext, FC, useContext, useState } from 'react'
import { OpenModalPayload } from './types'

type ModalContextType = {
  modalPayload: OpenModalPayload | null
  openModal(payload: OpenModalPayload): void
  closeModal(): void
}
export const ModalContext = createContext({} as ModalContextType)

export const ModalProvider: FC = ({ children }) => {
  const [modalPayload, setModalType] = useState<OpenModalPayload | null>(null)

  const closeModal = () => setModalType(null)
  const openModal = (payload: OpenModalPayload) => {
    setModalType(payload)
  }

  return (
    <ModalContext.Provider value={{ openModal, modalPayload, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  return ctx
}
