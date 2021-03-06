import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom'
import {useCart} from 'react-use-cart'



class MenuItem extends Component {
  render() {
    return (
      <div>
        <li className="nav-item dropdown  me-4">
          <Link exact to={this.props.goto} className="nav-link  active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.props.title}
          </Link>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link to={this.props.gotoitem} className="dropdown-item" >Test Item</Link></li>
            <li><Link className="dropdown-item" >Test Item</Link></li>
            <li><Link className="dropdown-item" >Test Item</Link></li>
            <li><Link className="dropdown-item" >Test Item</Link></li>
            <li><Link className="dropdown-item" >Test Item</Link></li>

          </ul>
        </li>
      </div>
    )
  }
}

const Header =()=>{
  

 
    const {totalItems}=useCart();
    return (
      <header >
        <nav className="navbar navbar-expand-lg navbar-light ec-nav">
          <div className="container-fluid">
            <img className="navbar-brand" src={logo} width='130' />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">


                <MenuItem gotoitem="/" title="Home" />
                <MenuItem gotoitem="/Shop" title="Shop" />
                <MenuItem gotoitem="/Blog" title="Blog" />
                <MenuItem gotoitem="/Pages" title="Pages" />

                <li class="nav-item ">
                  <Link to="/ContactUs" class="nav-link active" >Contact Us</Link>
                </li>
              </ul>

              <form className="d-flex align-items-center">
                <i class="fas fa-search "></i>
                <ul className="navbar-nav me-3 ms-3 mb-2 mb-lg-0 ">
                  <MenuItem gotoitem="/Myaccount" title="My Account" />
                </ul>

                <Link to="/AddToCart" className="btn btn-outline-success" type="submit"><i class="fas fa-shopping-cart me-1"></i> {totalItems} Items</Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
    )
  
}

export default Header
