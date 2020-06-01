import React, { useState, useEffect } from 'react';
import { Instruction } from './';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface InstructionsProps {
  title?: string;
  instructions?: string;
}

const Instructions: React.FC<InstructionsProps> = ({ title, instructions }) => {
  const [formattedInstructions, setFormattedInstructions] = useState<Array<string> | undefined>();

  useEffect(() => {
    if (instructions) {
      let instr = instructions?.replace(/<(.|\n)*?>/g, '').split('.');
      instr?.pop();
      setFormattedInstructions(instr);
    } else {
      //   TODO: check for recipes with no instructions, render modal with message'
      alert('no instructions');
    }
  }, [instructions]);

  return (
    <ListGroup className='card-shadow'>
      <ListGroup.Item className='ingredient bg-dark mt-3'>
        <p className='d-inline text-light'>Ingredients for {title}</p>
      </ListGroup.Item>

      {formattedInstructions?.map((instruction, index) => (
        <Instruction key={index} instruction={instruction} />
      ))}
    </ListGroup>
  );
};

export default Instructions;
