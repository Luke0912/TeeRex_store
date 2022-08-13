import { colors, gender, price, type } from '../../Configs';
import { setFilter, setFilterP } from '../../redux/actions/productActions';

import { FaFilter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    dispatch(setFilter(value, checked));
  };

  const handleCheckPrice = (e) => {
    const { value, checked } = e.target;
    dispatch(setFilterP(Number(value), checked));
  };

  return (
    <>
      <div className={styles.sideBarDiv}>
        <form className={styles.form}>
          <h3>Color</h3>
          {colors.map((e, id) => (
            <div className={styles.colorDiv} key={id}>
              <label htmlFor='colors'>
                <input
                  type='checkbox'
                  name='name'
                  value={e.color}
                  onChange={handleCheck}
                ></input>
                {e.color}
              </label>
            </div>
          ))}
          <h3>Gender</h3>
          {gender.map((e, id) => (
            <div className={styles.genderDiv} key={id}>
              <label htmlFor='gender'>
                <input
                  type='checkbox'
                  name='name'
                  value={e.gender}
                  onChange={handleCheck}
                ></input>
                {e.gender}
              </label>
            </div>
          ))}
          <h3>Price less than</h3>
          {price.map((e, id) => (
            <div key={id}>
              <label htmlFor='price'>
                <input
                  type='checkbox'
                  name='name'
                  value={e.price}
                  onChange={handleCheckPrice}
                ></input>
                {e.price}
              </label>
            </div>
          ))}
          <h3>Type</h3>
          {type.map((e, id) => (
            <div key={id}>
              <label htmlFor='type'>
                <input
                  type='checkbox'
                  name='name'
                  value={e.type}
                  onChange={handleCheck}
                ></input>
                {e.type}
              </label>
            </div>
          ))}
        </form>
      </div>

      {/* drop */}

      <div className={styles.dropdown}>
        <span className={styles.hello}>
          <FaFilter></FaFilter>
        </span>
        <div className={styles.dropdown_content}>
          <div>
            <h3>Color</h3>
            {colors.map((e, id) => (
              <div className={styles.colorDiv} key={id}>
                <label htmlFor='colors'>
                  <input
                    type='checkbox'
                    name='name'
                    value={e.color}
                    onChange={handleCheck}
                  ></input>
                  {e.color}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h3>Gender</h3>
            {gender.map((e, id) => (
              <div className={styles.genderDiv} key={id}>
                <label htmlFor='gender'>
                  <input
                    type='checkbox'
                    name='name'
                    value={e.gender}
                    onChange={handleCheck}
                  ></input>
                  {e.gender}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h3>Price less than</h3>
            {price.map((e, id) => (
              <div key={id}>
                <label htmlFor='price'>
                  <input
                    type='checkbox'
                    name='name'
                    value={e.price}
                    onChange={handleCheckPrice}
                  ></input>
                  {e.price}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h3>Type</h3>
            {type.map((e, id) => (
              <div key={id}>
                <label htmlFor='type'>
                  <input
                    type='checkbox'
                    name='name'
                    value={e.type}
                    onChange={handleCheck}
                  ></input>
                  {e.type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
