import Register from "components/Main/Checkout/Register/Register.jsx";
import ProgressControl from "components/Main/Checkout/ProgressControl.jsx";
import Cart from "components/Main/Checkout/Cart/Cart.jsx";

export default function checkout() {
  return (
    <>
      <Register />
      <Cart />
      <ProgressControl />
    </>
  );
}
