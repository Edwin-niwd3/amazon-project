import {products} from './data/products';
import formatCurrency from './utils/money';


const Main = () => {
  console.log(products);
  return ( 
    <div className="main">
      <div className="products-grid">
          {
            products.map(product => (
              <div className="product-container" key = {product.id}>
                <div className="product-image-container">
                  <img src= {require(`./${product.image}`)} className="product-image"/>
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
                  {`${formatCurrency(product.priceCents)}`}
                </div>

                <div className="product-quantity-container">
                  <select id = {`product-Quantity-${product.id}`}>
                  <option selected value="1">1</option>
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
              </div>
            ))
          }
        </div>
    </div>
   );
}
 
export default Main;