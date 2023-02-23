import CartContent from "components/Main/Checkout/Cart/CartContent.jsx";
import CartStatistics from "components/Main/Checkout/Cart/CartStatistics.jsx";

export default function cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      {/* 購物車品項 */}
      <CartContent />
      {/* 購物車結帳統計 */}
      <CartStatistics />
    </section>
  );
}
