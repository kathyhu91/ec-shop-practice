import { useState } from "react";
import CartList from "components/Main/Checkout/Cart/CartList.jsx";
// 匯入產品資料
import cartData from "data/cartData.js";
// 運費
let deliveryFee = 60;

function Cart() {
  //傳遞值：cartData,數量更新事件
  // 定義會狀態變化的值，進行初始化useState：預設值是原始cartData
  const [cartItems, setCartItems] = useState(cartData);
  // 小計
  const subtotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  // 總金額
  const orderPrice = subtotal + deliveryFee;

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      {/* 購物車品項 */}
      <CartList cartItems={cartItems} setCartItems={setCartItems} />
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">NTD${subtotal}</div>
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">NTD${deliveryFee}</div>
      </section>
      <section className="cart-info col col-12">
        <div className="text">總計</div>
        <div className="price">NTD${orderPrice}</div>
      </section>
    </section>
  );
}
export default Cart;
