import ModalRegister from './register'

export type Modals = typeof ModalRegister
export type ModalType = keyof Modals

export type ModalProps = Omit<React.ComponentProps<Modals[ModalType]>, 'close' | 'children'>

export interface CommonModalProps {
  close(): void
}
export type OpenModalPayload = {
  type: ModalType
  props?: ModalProps
}
