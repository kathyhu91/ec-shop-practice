import Register from './register/register.js'
import ProgressControl from './progressControl.js' 
import Cart from './cart/cart.js'

export default function checkout() {
    return (
<div>
    <Register/>
    <ProgressControl/>
    <Cart/>
    </div>
    )
}