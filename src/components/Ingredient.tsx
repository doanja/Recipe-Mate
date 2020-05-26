import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSquare } from '@fortawesome/free-solid-svg-icons';

interface IngredientProps {
  ingredient: string;
}

export const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ListGroup.Item className='ingredient' onClick={() => setChecked(!checked)}>
      <FontAwesomeIcon icon={checked ? faCheck : faSquare} className='icon mr-3 fa-1x' />
      <p className={`${checked ? 'done d-inline' : 'd-inline'}`}>{ingredient}</p>
    </ListGroup.Item>
  );
};
