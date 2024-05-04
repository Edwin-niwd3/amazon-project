import Navbar from "./Navbar";
import { cart } from "./data/cart";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { getDeliveryOption, deliveryOptions } from "./data/deliveryOptions";
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

  console.log(cart);

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

  const CurrencyFormatter = (productId) => {
    const matchingProduct = getProduct(productId);
    return formatCurrency(matchingProduct.priceCents);
  }

  const getDeliveryDate = (deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'
    );
    const dateString = deliveryDate.format(
      'dddd,MMMM,D'
    );
    return dateString;
  }

  const getShippingFee = (deliveryOption) => {
    const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)}`;
    return priceString;
  }

  return ( 
    <div className="checkout_main">
      <Navbar/>
      <div className="checkout-grid">
        <div className="order-summary">
          {cart.map(Item => (
            <div className="cart-item-container" key = {Item.Id}>
              <div className="delivery-date">
                Delivery date: {getDate(Item.Id, Item)}
              </div>

              <div className="cart-item-details-grid">
                <img src={require(`./${getImage(Item.Id)}`)} className = "checkout-product-image"/>
                <div className="cart-item-details">
                  <div className="checkout-product-name">
                    {getName(Item.Id)}
                  </div>

                  <div className="checkout-product-price">
                    ${CurrencyFormatter(Item.Id)}
                  </div>
                  
                  <div className="checkout-product-quantity">
                    <span>
                      Quantity: <span className="quantity-label">{Item.quantity}</span>
                    </span>
                  </div>
                </div>
                <div>
                <div className="deliver-option">
                  <div className="delivery-options-title">
                    Choose a delivery option: 
                  </div>
                  {deliveryOptions.map(deliveryOption => 
                  <div className="delivery-option" data-delivery-option-id = {deliveryOption.id}>
                    <input type="radio" checked className = "delivery-option-input" name = {`delivery-option-${Item.Id}`}/>
                    <div>
                      <div className="delivery-option-date">
                        {getDeliveryDate(deliveryOption)}
                      </div>
                      <div className="delivery-option-price">
                        {`${getShippingFee(deliveryOption)} - Shipping`}
                      </div>
                    </div>
                  </div>
                    )}
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