//  匯入data
import cartData from "data/cartData.js";

let deliveryFee = calculatePrice(cartData) > 1000 ? 0 : 60;

function calculatePrice(data) {
  let total = 0;
  data.forEach((item) => {
    total += Number(item.price) * Number(item.quantity);
  });
  return total;
}

function cartStatistics() {
  return (
    <>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">{deliveryFee}</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{calculatePrice(cartData)}</div>
      </section>
    </>
  );
}

export default cartStatistics;
