import { ReactComponent as SvgRightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as SvgLeftArrow } from "assets/icons/left-arrow.svg";

import { useContext } from 'react'
import { CartContext } from 'context/CartContext.js'



function ProgressControl({ phaseNum, setPhaseNum }) {

  const cartItems = useContext(CartContext).cart.cartItemsData[0]; //品項
  const creditCardInfo = useContext(CartContext).creditCard[0] //付款資訊
  const subtotalPrice = useContext(CartContext).cart.subtotalPrice //購物車小計
  const shippingFee = useContext(CartContext).shipping[0] //運費
  const orderPrice = useContext(CartContext).cart.orderPrice//訂單總額

  function handleOnClick(action) {
    // 排除換頁例外：數值只能在1-3之間，步驟1沒有上一步，步驟3沒有下一步
    if (action === "prev") {
      if (phaseNum === 1) return;
      setPhaseNum((num) => num - 1);
    } else if (action === "next") {
      if (phaseNum === 3) return;
      setPhaseNum((num) => num + 1);
    }
  }

  function sedOrder(){
    console.log("訂購商品資訊如下:")
    cartItems.forEach((item)=>{
      console.log(`${item.name}共${item.quantity}件`)
    })
    console.log(`購物車金額小計:${subtotalPrice}，運費${shippingFee}，訂單總金額${orderPrice}`)
    console.log("信用卡資料如下")
    let creditCardInfoTitle = Object.keys(creditCardInfo)
    creditCardInfoTitle.forEach((item)=>{
      console.log(`${item} : ${creditCardInfo[item]}`)
    })
  }
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button
          className="next cursor-point"
          onClick={() => handleOnClick("next")}
        >
          下一步
          <svg>
            <SvgRightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button
          className="prev cursor-point"
          onClick={() => handleOnClick("prev")}
        >
          <svg>
            <SvgLeftArrow />
          </svg>
          上一步
        </button>
        <button
          className="next cursor-point"
          onClick={() => handleOnClick("next")}
        >
          下一步
          <svg>
            <SvgRightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button
          className="prev cursor-point"
          onClick={() => handleOnClick("prev")}
        >
          <svg>
            <SvgLeftArrow />
          </svg>
          上一步
        </button>
        <button className="next" onClick={sedOrder}>確認下單</button>
      </section>
    </section>
  );
}
export default ProgressControl;
