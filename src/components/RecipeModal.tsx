import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ModalProps {
  toggleModal: ToggleModal;
  showModal: boolean;
}

const RecipeModal: React.FC<ModalProps> = ({ toggleModal, showModal }) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipeModal;
