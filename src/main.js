import {products} from './data/products';


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
                </div>
              </div>
            ))
          }
        </div>
    </div>
   );
}
 
export default Main;