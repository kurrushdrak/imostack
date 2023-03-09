import React, { Component } from 'react';
import { BrowserRouter ,Link,Route,Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';
import Product from './Product';
import Services from './Services';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <ul>
            <li><Link to='/Home'  target="_blank">Home</Link></li>
            <li><Link to='/Product'  target="_blank">Product</Link></li>
            <li><Link to='/Services'  target="_blank">Services</Link></li>
            <li><Link to='/Aboutus'  target="_blank">Aboutus</Link></li>
        </ul>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

export default Navbar;
