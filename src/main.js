import {products} from './data/products';
import formatCurrency from './utils/money';
import checkmark from './images/icons/checkmark.png';
import { NumberofItems, addToCart } from './data/cart';
import Navbar from './Navbar';
import { useState , useEffect} from 'react';

const Main = () => {

  const handleAddToCart = (productId) => {
    const selectQuantity = parseInt(document.getElementById(`product-Quantity-${productId}`).value);
    addToCart(productId, selectQuantity);
    setCartQuantity(NumberofItems());
  }



  const [cartQuantity, setCartQuantity] = useState(NumberofItems());

  

  return ( 
    
    <div className="main">
      <Navbar cartQuantity={cartQuantity}></Navbar>
      <div className="products-grid">
          {
            products.map(product => (
              <div className="product-container" key = {product.id}>
                <div className="product-image-container">
                  <img src= {require(`./${product.image}`)} alt = {product.name} className="product-image"/>
                </div>
                <div className="product-name">
                  {product.name}
                </div>
                <div className="product-rating-container">
                  <img src= {require(`./images/ratings/rating-${product.rating.stars * 10}.png`)} className="product-rating-stars"/>
                  <div className="product-rating-count link-primary">
                    {`${product.rating.count}`}
                  </div>
                </div>

                <div className="product-price">
                  {`$${formatCurrency(product.priceCents)}`}
                </div>

                <div className="product-quantity-container">
                  <select id = {`product-Quantity-${product.id}`}>
                    <option hidden>Select Amount</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src = {checkmark}></img>
                  Added
                </div>

                <button className="add-to-cart-button button-primary" onClick = {() => handleAddToCart(product.id)}>
                  Add to Cart
                </button>
              </div>
            ))
          }
        </div>
    </div>
   );
}
 
export default Main;