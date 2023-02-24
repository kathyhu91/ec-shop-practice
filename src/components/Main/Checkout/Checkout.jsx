import Register from "components/Main/Checkout/Register/Register.jsx";
import Cart from "components/Main/Checkout/Cart/Cart.jsx";

function Checkout() {
  return (
    <>
      {/* 結帳表單 */}
      <Register />
      {/* 購物車 */}
      <Cart />
    </>
  );
}

export default Checkout;

// Register 和 Cart 之間，照正常情形有一個運費要連動，未做。
