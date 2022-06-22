import { useState } from "react";
import emptybag from '../assets/random/emptyCart.png';
import { getCartItems } from "./resuableFunc";

function Cart() {
    getCartItems();
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const [called, setcalled] = useState(false);
    const [empty, isempty] = useState(true);

    // the problem is in the navbar section since it only checks if the first 
    // item in the array !== ''.

    let items = 0;
    cartItems.forEach(el => {
        if (el !== '') {
            items++;
        };
    });

    if (items !== 0 && called === false) {
        setcalled(true)
        isempty(false);
    };

    const deleteCartItem = (e) => {
        e.preventDefault();
        const name = e.target.parentElement.parentElement.childNodes[0].childNodes[0].textContent;

        let index;

        cartItems.forEach((el, i) => {
            if (el.name === name) {
                index = i;
            };
        });

        // 1. Removs the item from the local storage directly.
        localStorage.removeItem(name);

        // 2. Removes the item from the cart.
        const newArr = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
        // eslint-disable-next-line no-unused-vars
        const updateArr = newArr.splice(index, 1);

        localStorage.setItem('cartItems', JSON.stringify(newArr));
        window.location.reload();
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
                                // eslint-disable-next-line array-callback-return
                                cartItems.map((el, i) => {
                                    if (el !== '') {
                                        return (
                                            <div className="cardItem" key={i}>
                                                <div className="cardItemOne">
                                                    <img src={el.img} alt='item' />
                                                </div>
                                                
                                                <div className="cardItemTwo">
                                                    <div className="name">
                                                        <h1>{el.name}</h1>
                                                    </div>

                                                    <div className="details">
                                                        <h1>Qty: {el.qty}</h1>
                                                        <h1>{el.price}</h1>
                                                        <h1>Size: {el.size}</h1>
                                                    </div>

                                                    <div className="delete">
                                                        <ion-icon name="close-outline" id='deleteItem' onClick={deleteCartItem}>

                                                        </ion-icon>
                                                    </div>
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