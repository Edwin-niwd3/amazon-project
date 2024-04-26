import {Link} from 'react-router-dom';
import amazonLogo from './images/amazon-logo-white.png'
import cartIcon from './images/icons/cart-icon.png'
import { NumberofItems } from './data/cart';
import { useEffect } from 'react';

const Navbar = ({cartQuantity}) => {

  useEffect(()=>{

  }, [cartQuantity])

  return ( 
    <nav className="amazon-header">
      <div className="amazon-header-left-section">
        <Link to = "/" className = "header-link"><img className = "amazon-logo" src = {amazonLogo}></img></Link>
      </div>
      <div className="amazon-header-right-section">
        <Link to = "/orders" className = "orders-link header-link">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
          </Link>
        <Link to = "/checkout" className = "cart-link header-link">
          <img src= {cartIcon} className="cart-icon"/>
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </nav>
   );
}
 
export default Navbar;