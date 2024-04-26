import Navbar from "./Navbar";
import { cart } from "./data/cart";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { getDeliveryOption } from "./data/deliveryOptions";
import { getProduct } from "./data/products";
import formatCurrency from "./utils/money";

const Checkout = () => {
  const getImage = (productId) => {
    const matchingProduct = getProduct(productId);
    const image = matchingProduct.image;
    return image;
  }

  const getName = (productId) => {
    const matchingProduct = getProduct(productId);
    const name = matchingProduct.name;
    return name;
  }

  const getDate = (productId, cartItem) => {
    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format('ddd,MMMM,D');
    return dateString;
  }

  return ( 
    <div className="main">
      <Navbar/>
      <div className="checkout-grid">
        <div className="order-summary">
          {cart.map(Item => (
            <div className="cart-item-container">
              <div className="delivery-date">
                Delivery date: {getDate(Item.Id, Item)}
              </div>

              <div className="cart-item-details-grid">
                <img src={require(`./${getImage(Item.Id)}`)} className = "product-image"/>
                <div className="cart-item-details">
                  <div className="product-name">
                    {getName(Item.Id)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="payment-summary">

        </div>
      </div>
    </div>
   );
}
 
export default Checkout;