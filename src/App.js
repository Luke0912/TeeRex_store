import './App.css';

import { Route, Routes } from 'react-router-dom';

import Cart from './Pages/CartHandler/Cart';
import Navbar from './Components/NavbarHandler/Navbar';
import ProductListing from './Pages/ProductListingHandler/ProductListing';

function App() {
  return (
    <div className='App'>
      <div className='navDiv'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<ProductListing />}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
