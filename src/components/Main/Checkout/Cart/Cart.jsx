import { useContext } from 'react'
import { CartContext } from 'context/CartContext.js'

import CartList from "components/Main/Checkout/Cart/CartList.jsx";

function Cart() {
  
  const [cartItems, setCartItems] = useContext(CartContext).cart.cartItemsData;
  const subtotalPrice = useContext(CartContext).cart.subtotalPrice
  const orderPrice = useContext(CartContext).cart.orderPrice
  const shippingFee = useContext(CartContext).shipping[0]

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      {/* 購物車品項 */}
      <CartList cartItems={cartItems} setCartItems={setCartItems} />
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">NTD${subtotalPrice}</div>
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">NTD${shippingFee}</div>
      </section>
      <section className="cart-info col col-12">
        <div className="text">總計</div>
        <div className="price">NTD${orderPrice}</div>
      </section>
    </section>
  );
}
export default Cart;