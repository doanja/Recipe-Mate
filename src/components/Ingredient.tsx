import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

interface IngredientProps {
  ingredient: string;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ListGroup.Item className='ingredient' onClick={() => setChecked(!checked)}>
      <FontAwesomeIcon icon={checked ? faCheck : faSquare} className='mr-3' />

      <p className={`${checked ? 'done d-inline' : 'd-inline'}`}>{ingredient}</p>
    </ListGroup.Item>
  );
};

export default Ingredient;
