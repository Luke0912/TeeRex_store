import React, { useState } from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const cart = useSelector((state) => state.allProduct.cart.length);

  const navigate = useNavigate();

  const toCart = () => {
    if (cart === 0) {
      alert('cart is empty');
      return;
    }
    navigate('/Cart');
  };

  const toHome = () => {
    navigate('/');
  };
  return (
    <>
      <nav className={styles.navbar}>
        <h3 className={styles.logo}>TeeRex Store</h3>
        <ul
          className={Mobile ? styles.nav_links_mobile : styles.nav_links}
          onClick={() => setMobile(false)}
        >
          <>
            <li onClick={toHome} className={styles.navDivCartLogo}>
              Products
            </li>
            {!Mobile ? (
              <li className={styles.navDivCartLogo}>
                <AiOutlineShoppingCart
                  style={{ fontSize: '25' }}
                  onClick={toCart}
                />
                <span>{cart}</span>
              </li>
            ) : (
              <li onClick={toCart}>Cart</li>
            )}
          </>
        </ul>
        <button
          className={styles.mobile_menu_icon}
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
