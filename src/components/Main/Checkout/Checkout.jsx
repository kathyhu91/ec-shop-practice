import Register from "components/Main/Checkout/Register/Register.jsx"; //表單
import Cart from "components/Main/Checkout/Cart/Cart.jsx";//購物車

import { useState } from "react"
import { CartContext } from "context/CartContext.js"

import cartData from "data/cartData.js";

function Checkout() {

  const creditCartData = {}
  // 初始化
  const [phaseNum, setPhaseNum] = useState(1);
  const [cartItems, setCartItems] = useState(cartData);
  const [creditCardInfo, setCreditCardInfo ] = useState(creditCartData)
  const [shippingFee,setShippingFee] = useState(0)
  
// 被傳遞的值
  const contextValue = {
    cart: {
      cartItemsData: [ cartItems, setCartItems ],
      subtotalPrice: countCartPrice(),
      orderPrice : countOrderPrice()
    }, 
    creditCard: [ creditCardInfo, setCreditCardInfo ],
    shipping :[shippingFee,setShippingFee],
    phase:[phaseNum, setPhaseNum]
  }

  function countCartPrice() {
    let cartPrice = cartItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    )
    return cartPrice
  }

  function countOrderPrice() {
    let orderPrice = cartItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    )
    orderPrice += shippingFee
    return orderPrice
  }

  return (
    <CartContext.Provider value={contextValue}>
      <>
      {/* 結帳表單 */}
      <Register />
      {/* 購物車 */}
      <Cart/>
      </>
    </CartContext.Provider>
  );
}

export default Checkout;
