import React from 'react';
import { Instruction } from '.';
import { ListGroup } from 'react-bootstrap';

interface InstructionsProps {
  instructions: string[];
}

const Instructions: React.FC<InstructionsProps> = ({ instructions }) => {
  return (
    <ListGroup className='mt-3 recipe-detailed'>
      <ListGroup.Item className='bg-dark'>
        <p className='d-inline text-light'>Instructions</p>
      </ListGroup.Item>

      {instructions.map((instructions, index) => (
        <Instruction key={index} instruction={instructions} />
      ))}
    </ListGroup>
  );
};

export default Instructions;
