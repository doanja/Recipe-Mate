import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

// redux
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todoActions';

const TodoForm: React.FC = () => {
  // redux
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setText(e.target.value);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='mt-3'>
        <Form.Control type='text' placeholder='Enter a todo' value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
        <InputGroup.Append>
          <Button className='bg-light' variant='secondary' type='submit' onClick={handleSubmit}>
            Add Todo
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
