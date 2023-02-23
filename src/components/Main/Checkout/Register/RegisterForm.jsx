import RegisterFormAddress from "./RegisterFormAddRess.jsx";
import RegisterFormShipping from "./RegisterFormShipping.jsx";
import RegisterFormCreditCard from "./RegisterFormCReditCard.jsx";

export default function registerForm() {
  return (
    <section className="form-container col col-12">
      <RegisterFormAddress />
      <RegisterFormShipping />
      <RegisterFormCreditCard />
    </section>
  );
}
