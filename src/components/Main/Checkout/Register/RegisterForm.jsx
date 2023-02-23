import RegisterFormAddress from "components/Main/Checkout/Register/RegisterFormAddRess.jsx";
import RegisterFormShipping from "components/Main/Checkout/Register/RegisterFormShipping.jsx";
import RegisterFormCreditCard from "components/Main/Checkout/Register/RegisterFormCReditCard.jsx";

export default function registerForm() {
  return (
    <section className="form-container col col-12">
      <RegisterFormAddress />
      <RegisterFormShipping />
      <RegisterFormCreditCard />
    </section>
  );
}
