import Register from './Register/Register.js'
import ProgressControl from './ProgressControl.js' 
import Cart from './Cart/Cart.js'

export default function checkout() {
    return (
<>
    <Register/>
    <Cart/>
    <ProgressControl/>
    </>
    )
}