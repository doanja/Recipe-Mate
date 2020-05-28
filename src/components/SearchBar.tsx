import React, { useState, ChangeEvent } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

interface SearchBarProps {
  getRecipe: getRecipe;
}

export const SearchBar: React.FC<SearchBarProps> = ({ getRecipe }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    getRecipe(input);
    setInput('');
  };

  return (
    <InputGroup className='mt-3'>
      <FormControl placeholder='Search Recipe' value={input} onChange={handleChange} />
      <InputGroup.Append>
        <Button variant='outline-secondary' onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};
