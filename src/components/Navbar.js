import React, { Component } from 'react';
import { BrowserRouter ,Link,Route,Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Home from './Home';
import Login from './Login';
import Product from './Product';
import Services from './Services';

export class Navbar extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
         <img src="https://images.aasaan.shop/stores/wellstackimo/logo/logo_1660900962711.png" alt="logo" width="-100" height="80" />
         </div>
      <div style={{marginTop:10}}>
        <BrowserRouter>
        <ul>
        <li><Link to='/login'  >Login</Link></li>
            <li><Link to='/Home'  >Home</Link></li>
            <li><Link to='/Product'  >Product</Link></li>
            <li><Link to='/Services' >Services</Link></li>
            <li><Link to='/Aboutus'  >About us</Link></li>
            <li><Link to='/Contactus'  >Contact us</Link></li>
        </ul>
        <Routes>
        <Route path='/login' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
            <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
        </BrowserRouter>
        </div>

      </div>
    )
  }
}

export default Navbar;
