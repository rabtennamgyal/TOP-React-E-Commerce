import { useState } from "react";
import emptybag from '../assets/random/emptyCart.png';
import { getCartItems } from "./resuableFunc";

function Cart() {
    getCartItems();
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const [called, setcalled] = useState(false);
    const [empty, isempty] = useState(true);

    if (cartItems[0] !== '' && called === false) {
        setcalled(true)
        isempty(false);
    };

    return (
        <div className="cart">
            {
                empty &&

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

            {
                called &&

                <div className="cartItems">
                    <div className="cards">
                        <div className="cardOne">
                            <h1>
                                My Shopping Cart
                            </h1>
                        </div>

                        <div className="cardTwo">
                            {
                                cartItems.map((el, i) => {
                                    if (el !== '') {
                                        return (
                                            <div className="cardItem" key={i}>
                                                <div className="cardItemOne">
                                                    <img src={el.img} alt='item' />
                                                </div>
                                                
                                                <div className="cardItemTwo">
                                                    <h1>{el.name}</h1>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default Cart;