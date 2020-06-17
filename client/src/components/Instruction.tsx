import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

interface InstructionProps {
  instruction: string;
}

const Instruction: React.FC<InstructionProps> = ({ instruction }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ListGroup.Item action onClick={() => setChecked(!checked)}>
      <FontAwesomeIcon icon={checked ? faCheck : faSquare} className='mr-3' />

      <p className={`${checked ? 'done d-inline' : 'd-inline'}`}>{instruction}</p>
    </ListGroup.Item>
  );
};

export default Instruction;
