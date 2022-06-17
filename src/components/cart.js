import { useState } from "react";
import emptybag from '../assets/random/emptyCart.png';

function Cart() {
    const [empty, isempty] = useState(true);

    return (
        <div className="cart">
            {empty && 
            
                <div className="emptyCart">
                    <div className="emptyCartImg">
                        <img src={emptybag} alt='empty bag' />
                    </div>
                    
                    <div className="emptyCartText">
                        <h1>
                            Your Shopping Bag is Empty.
                        </h1>
                    </div>
                </div>
            }
        </div>
    )
};

export default Cart;
