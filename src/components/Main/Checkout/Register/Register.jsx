// 匯入
import RegisterProcess from "./RegisterProgRess.jsx";
import RegisterForm from "./RegisterForm.jsx";

// 匯出
function registerForm() {
  return (
    // register
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <h2 className="register-title col col-12">結帳</h2>
      <RegisterProcess />
      <RegisterForm />
    </section>
  );
}
export default registerForm;
