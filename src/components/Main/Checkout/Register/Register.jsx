import { useContext } from 'react'
import { CartContext } from 'context/CartContext.js'

// 結帳流程
import RegisterProcess from "components/Main/Checkout/Register/RegisterProgRess.jsx";
// 結帳表格:地址、運費、付款
import RegisterFormAddress from "components/Main/Checkout/Register/RegisterFormAddRess.jsx";
import RegisterFormShipping from "components/Main/Checkout/Register/RegisterFormShipping.jsx";
import RegisterFormCreditCard from "components/Main/Checkout/Register/RegisterFormCReditCard.jsx";
// 步驟選項
import ProgressControl from "components/Main/Checkout/Register/ProgressControl.jsx";

function Register() {
  
  const [phaseNum, setPhaseNum] = useContext(CartContext).phase;

  return (
    <>
      <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase={phaseNum}
        data-total-price="0"
      >
        {/* 最外層section的data-phase值更動，是連動RegisterProcess與表單顯示*/}
        <h2 className="register-title col col-12">結帳</h2>
        <RegisterProcess phaseNum={phaseNum} />
        <section className="form-container col col-12">
          {/* 外層section的data-phase值會連動表單顯示種類 */}
          <RegisterFormAddress />
          <RegisterFormShipping />
          <RegisterFormCreditCard />
        </section>
      </section>
      <ProgressControl phaseNum={phaseNum} setPhaseNum={setPhaseNum} />
      {/* 傳遞值：外層section的data-phase值會連動切換鈕呈現、切換步驟事件 */}
    </>
  );
}
export default Register;

