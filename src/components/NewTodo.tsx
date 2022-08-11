import { useRef, useContext, useState } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const [message, setMessage] = useState('');

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (message.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(message);

    setMessage('');
  };

  const inputHandler = () => {
    setMessage(todoTextInputRef.current!.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input
        type='text'
        id='text'
        name='text'
        value={message}
        ref={todoTextInputRef}
        onChange={inputHandler}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
