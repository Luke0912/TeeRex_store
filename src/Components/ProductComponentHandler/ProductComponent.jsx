import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../redux/actions/productActions';
import styles from './ProductComponent.module.css';

const ProductComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProduct.products);
  const cartProducts = useSelector((state) => state.allProduct.cart);
  const testId = cartProducts.map((element) => element.id);
  const tId = [...testId];
  const renderList = products.map((product) => {
    const {
      color,
      currency,
      gender,
      id,
      imageURL,
      name,
      price,
      quantity,
      type,
    } = product;

    const toCart = (e) => {
      e.preventDefault();
      if (quantity === 0) {
        return alert('Cannot add item,it is unavailable');
      }
      for (var i = 0; i < tId.length; i++) {
        if (id === tId[i]) {
          return alert(
            'Item is already in the cart. Please visit to cart to increase item count'
          );
        }
      }
      dispatch(addToCart(product));
    };

    return (
      <div className={styles.Card} key={id}>
        <div className={styles.desc}>
          <h6>{name}</h6>
          <h6>QTY:{quantity}</h6>
        </div>
        <div className={styles.image}>
          <img src={imageURL} alt='product_img' />
        </div>
        <div className={styles.desc1}>
          <h6>Color:{color}</h6>
          <h6>Type:{type}</h6>
          <h6>Gender:{gender}</h6>
        </div>

        <div className={styles.desc2}>
          <div className={styles.desc3}>
            <h6>Rs {price}</h6>
            <h6>{currency}</h6>
          </div>
          <button className={styles.btn} onClick={toCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  });
  return <>{renderList.length > 0 ? renderList : 'Nothing Found'}</>;
};

export default ProductComponent;
