import React from 'react';
import { Instruction } from './';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface InstructionsProps {
  title?: string;
  instructions?: Array<string>;
}

const Instructions: React.FC<InstructionsProps> = ({ title, instructions }) => {
  return (
    <ListGroup className='card-shadow'>
      <ListGroup.Item className='ingredient bg-dark mt-3'>
        <p className='d-inline text-light'>Ingredients for {title}</p>
      </ListGroup.Item>

      {instructions?.map((instructions, index) => (
        <Instruction key={index} instruction={instructions} />
      ))}
    </ListGroup>
  );
};

export default Instructions;
