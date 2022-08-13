import { useEffect, useState } from 'react';
import { setProduct, setSearch } from '../../redux/actions/productActions';

import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import ProductComponent from '../../Components/ProductComponentHandler/ProductComponent';
import Sidebar from '../../Components/SidebarHandler/Sidebar';
import { configuration } from '../../Configs';
import styles from './ProductListing.module.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct();
  });

  const fetchProduct = async () => {
    const response = await axios.get(configuration.BASE_URL).catch((err) => {
      console.log('Err:', err);
    });
    dispatch(setProduct(response.data));
  };

  const [term, setTerm] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setSearch(term.trim()));
  };

  return (
    <>
      <div className={styles.Main}>
        <div className={styles.search}>
          <form onSubmit={handleChange} className={styles.box}>
            <input
              value={term}
              type='text'
              placeholder='Search Items here'
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type='submit'>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className={styles.selectDiv}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.listingDiv}>
          <ProductComponent />
        </div>
      </div>
    </>
  );
};

export default ProductListing;
