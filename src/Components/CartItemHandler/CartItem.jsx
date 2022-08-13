import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adjustItemQty } from '../../redux/actions/productActions';
import styles from './CartItem.module.css';

export const CartItem = ({ qty, i, quantity }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(qty);

  const onChangeHandler = (e) => {
    e.preventDefault();
    if (input < 1) {
      alert('Minimum Quantity Cannot Be 0');
      setInput(qty);
      return;
    }
    if (input > quantity) {
      alert('Cannot Exceed Maximum Available Quantity');
      setInput(qty);
      return;
    }
    dispatch(adjustItemQty(i, input));
  };

  return (
    <div className={styles.main}>
      <form onSubmit={onChangeHandler}>
        <label htmlFor='qty'>qty</label>
        <input
          type='number'
          id='qty'
          name='qty'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btn} type='submit'>
          Add Item Count
        </button>
      </form>
    </div>
  );
};
