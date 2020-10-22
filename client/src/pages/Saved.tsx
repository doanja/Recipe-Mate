import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Saved: React.FC = () => {
  return (
    <Modal className='text-center' show={true} backdrop={false} animation={false} centered>
      <Modal.Body className='py-5'>
        <h2 className='py-3 text-secondary'>This is page is for saved recipes</h2>
      </Modal.Body>
    </Modal>
  );
};

export default Saved;
