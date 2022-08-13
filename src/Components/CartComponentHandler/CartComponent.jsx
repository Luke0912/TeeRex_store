import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { removeFromCart } from '../../redux/actions/productActions';
import { CartItem } from '../CartItemHandler/CartItem';
import styles from './CartComponent.module.css';

const CartComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProduct.cart);

  const renderList = products.map((product) => {
    const { id, imageURL, name, price, quantity, qty } = product;
    const handleDelete = () => {
      const filterItem = product.id;
      dispatch(removeFromCart(filterItem));
    };

    return (
      <div className={styles.Card} key={id}>
        <div className={styles.image}>
          <img src={imageURL} alt='product_img' />
        </div>
        <div className={styles.desc}>
          <h5>{name}</h5>
          <h5>{price}</h5>
        </div>
        <div className={styles.qty}>
          <h6>Available:{quantity}</h6>
          <CartItem i={id} qty={qty} quantity={quantity} />
        </div>
        <div>
          <button className={styles.btn} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default CartComponent;
