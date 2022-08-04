import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (6 > enteredAmount > 0) {
      setAmountIsValid(true);
      return props.onAddToCart(enteredAmount);
    }

    return setAmountIsValid(false);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Amount entered is invalid!</p>}
    </form>
  );
};

export default MealItemForm;
