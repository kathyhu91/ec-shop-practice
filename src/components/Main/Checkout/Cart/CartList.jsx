import { ReactComponent as SvgMinus } from "assets/icons/minus.svg";
import { ReactComponent as SvgPlus } from "assets/icons/plus.svg";

function itemRender(data, handleOnClick) {
  return data.map((item) => (
    <div
      className="product-container col col-12"
      data-count={item.quantity}
      data-price={item.price}
      key={item.id}
    >
      <img className="img-container" src={item.img} alt={item.name} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <svg
              className="product-action minus"
              onClick={() => handleOnClick("minus", item.id, item.quantity)}
            >
              <SvgMinus />
            </svg>
            <span className="product-count">{item.quantity}</span>
            <svg
              className="product-action plus"
              onClick={() => handleOnClick("plus", item.id, item.quantity)}
            >
              <SvgPlus />
            </svg>
          </div>
        </div>
        <div className="price">NTD${item.price}</div>
      </div>
    </div>
  ));
}
// 傳進來
function cartList({ cartItems, setCartItems }) {
  function handleOnClick(action, id, quantity) {
    const selectedItem = cartItems.map((data) => {
      if (data.id === id) {
        if (action === "plus") {
          return { ...data, quantity: quantity + 1 };
        } else if (action === "minus") {
          return { ...data, quantity: quantity - 1 };
        }
      }
      return data;
    });
    // 判斷是否有數量<0的品項，並且濾掉
    setCartItems(selectedItem.filter((data) => data.quantity > 0));
  }

  return (
    <section className="product-list col col-12">
      {itemRender(cartItems, handleOnClick)}
    </section>
  );
}

export default cartList;