import Register from "./Register/Register.jsx";
import ProgressControl from "./ProgressControl.jsx";
import Cart from "./Cart/Cart.jsx";

export default function checkout() {
  return (
    <>
      <Register />
      <Cart />
      <ProgressControl />
    </>
  );
}
