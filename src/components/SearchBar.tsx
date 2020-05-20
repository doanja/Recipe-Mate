import React, { useState, ChangeEvent, FormEvent } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

interface SearchBarProps {
  searchRecipe: SearchRecipe;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchRecipe }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    searchRecipe(searchQuery);
    setSearchQuery('');
  };

  return (
    <InputGroup className='mt-3'>
      <FormControl placeholder='Search Recipe' value={searchQuery} onChange={handleChange} />
      <InputGroup.Append>
        <Button variant='outline-secondary' onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};
