import { useSelector } from 'react-redux';
import CartComponent from '../../Components/CartComponentHandler/CartComponent';
import styles from './Cart.module.css';

const Cart = () => {
  const cartProducts = useSelector((state) => state.allProduct.cart);

  const getTotalPrice = (items) =>
    items
      .map((item) => item.price * item.qty)
      .reduce((acc, value) => acc + value, 0);

  const total = getTotalPrice(cartProducts);

  return (
    <>
      <div className={styles.allDisplay}>
        <div className={styles.Display}>
          <CartComponent></CartComponent>
        </div>
        <div className={styles.Total}>
          <h4>Cart Total:{total}</h4>
        </div>
      </div>
    </>
  );
};

export default Cart;
