 // 匯入SVG
 import { ReactComponent as SvgMinus } from "../../../../image-resource/icons/minus.svg";
 import { ReactComponent as SvgPlus } from "../../../../image-resource/icons/plus.svg";

//  匯入data
import cartData from "./cartData.js";

// 統計

function cartContent(){
    return (
        <section className="product-list col col-12">
            {cartItem(cartData)}
        </section>

    )}

function cartItem (data){
    return  data.map(item =>  <div className="product-container col col-12" data-count={item.quantity} data-price={item.price} key={item.id} >
      <img className="img-container" src={item.img} alt={item.name} />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
            <svg className="product-action minus">
              <SvgMinus/></svg>
              <span className="product-count">{item.quantity}</span>
              <svg className="product-action plus">
              <SvgPlus/>
              </svg>
            </div>
          </div>
          <div className="price">NTD${item.price}</div>
        </div>
      </div>
    )
}


export default cartContent
// export 