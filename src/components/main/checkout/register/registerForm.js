import RegisterFormAddress from './RegisterFormAddRess.js'
import RegisterFormShipping from './RegisterFormShipping.js'
import RegisterFormCreditCard from './RegisterFormCReditCard.js'

export default function registerForm() {
    return (
<section className="form-container col col-12">
          <RegisterFormAddress/>
          <RegisterFormShipping/>
          <RegisterFormCreditCard/>
        </section>
    );
  }