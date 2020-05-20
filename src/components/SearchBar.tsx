import React, { useState, ChangeEvent, FormEvent } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    //   call some function
    console.log('TODO: call some function to make api call and display results', search);
    setSearch('');
  };

  return (
    <InputGroup className='mt-3'>
      <FormControl placeholder='Search Recipe' value={search} onChange={handleChange} />
      <InputGroup.Append>
        <Button variant='outline-secondary' onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};
