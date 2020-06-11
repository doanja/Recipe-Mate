import React, { useState, ChangeEvent } from 'react';
import { Form, InputGroup, Button, FormControl, FormGroup } from 'react-bootstrap';

interface SearchBarProps {
  getRecipe: getRecipe;
}

const SearchBar: React.FC<SearchBarProps> = ({ getRecipe }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    console.log(input);
    getRecipe(input);
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='mt-3'>
        <Form.Control type='text' placeholder='Search a recipe' value={input} onChange={setInput} />
        <InputGroup.Append>
          <Button variant='dark' type='submit' onClick={handleSubmit}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
