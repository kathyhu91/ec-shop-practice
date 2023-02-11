// 匯入
import RegisterProcess from './registerProgress.js'
import RegisterForm from './registerForm.js'

// 匯出
export default function registerForm() {
  return (
  // register
    <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 class="register-title col col-12">結帳</h2>
          <RegisterProcess/>
          <RegisterForm/>
    </section>
  );
}