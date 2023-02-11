import RegisterFormAddress from './registerFormAddress.js'
import RegisterFormShipping from './registerFormShipping.js'
import RegisterFormcreditCard from './registerFormCreditCard'

export default function registerForm() {
    return (
<section class="form-container col col-12">
          <RegisterFormAddress/>
          <RegisterFormShipping/>
          <RegisterFormcreditCard/>
        </section>
    );
  }