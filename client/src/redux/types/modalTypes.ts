export interface ModalState {
  showModal: boolean;
  modalBody: JSX.Element | string;
  modalTitle: string;
}

export enum ModalActionTypes {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  RESET_MODAL = 'RESET_MODAL',
}
