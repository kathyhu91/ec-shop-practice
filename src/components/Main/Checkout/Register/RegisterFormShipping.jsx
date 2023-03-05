import { useContext } from 'react'
import { CartContext } from 'context/CartContext.js'

import registerFormData from "data/registerFormData.js";


function shippingItems(data,handleOnClick){
  
  return data.map((item) => (
    <label
    className="radio-group col col-12"
    data-price={item.price}
    htmlFor={item.id}
    key={item.id}
    onClick={() => handleOnClick(item.id, item.price)}
  >
    <input id={item.id} type="radio" name="shipping" />
    <div className="radio-info">
      <div className="col col-12">
        <div className="text">{item.label}</div>
        <div className="price">{item.price>0? `$ ${item.price}` :"免費"}</div>
      </div>
      <div className="period col col-12">{item.direction}</div>
    </div>
    <div className="radio-box-border"></div>
  </label>
  ));
}


function RegisterFormShipping() {

  const setShippingFee = useContext(CartContext).shipping[1]

  function handleOnClick (type , price) {
    setShippingFee((fee) => fee = price)
  }

  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
      {shippingItems(registerFormData.shipping,handleOnClick)}
      </section>
    </form>
  );
}

export default RegisterFormShipping;
