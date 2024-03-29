import React from 'react';
import { useState } from "react";
import emptybag from '../assets/random/emptyCart.png';
import { getCartItems } from "./resuableFunc";


function Cart() {
    getCartItems();
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const [called, setcalled] = useState(false);
    const [empty, isempty] = useState(true);

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

        // 3. Substract the price value when an item is deleted.
        const subtotal = localStorage.getItem('subtotal') ? JSON.parse(localStorage.getItem('subtotal')) : [];
        const currentPrice = Number(e.target.parentElement.parentElement.childNodes[1].childNodes[1].textContent.split('').splice(1).join(''));
        const currentQuantity = Number(e.target.parentElement.parentElement.childNodes[1].childNodes[0].textContent.split(' ')[1]);

        let subtotalPrice = subtotal[0];
        let priceToBeDeducted = currentPrice * currentQuantity;
        let updatedSubtotal = [subtotalPrice - priceToBeDeducted];

        // 4. Substract the tax value when an item is deleted.
        const newTax = updatedSubtotal * (5 / 100);

        localStorage.setItem('cartItems', JSON.stringify(newArr));
        localStorage.setItem('subtotal', JSON.stringify(updatedSubtotal));
        localStorage.setItem('tax', JSON.stringify(newTax));
        window.location.reload();
    };

    // cart items total.
    const subtotal = JSON.parse(localStorage.getItem('subtotal'));
    const shipping = 5;
    const tax = JSON.parse(localStorage.getItem('tax'));

    const total = Number(subtotal) + shipping + Number(tax);

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

                    <div className="payment">
                        <div className="payOne">
                            <div className="payOneContent">
                                <div className="cart-price">
                                    <span>
                                        Subtotal
                                    </span>

                                    <span>
                                        ${subtotal}.00
                                    </span>
                                </div>

                                <div className="cart-price">
                                    <span>
                                        Shipping
                                    </span>

                                    <span>
                                        ${shipping}.00
                                    </span>
                                </div>

                                <div className="cart-price">
                                    <span>
                                        Tax
                                    </span>

                                    <span>
                                        ${tax}
                                    </span>
                                </div>

                                <div className="cart-price">
                                    <p>
                                        will be calculated according to your address
                                    </p>
                                </div>

                                <div className="cart-price">
                                    <span className="total">
                                        Total
                                    </span>

                                    <span className="total">
                                        ${total}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="payTwo">
                            <div className="payTwoContent">
                                <button className="checkout main">
                                    <p>
                                        Proceed to Checkout
                                    </p>
                                </button>
    
                                <button className="checkout paypal">
                                    <p>
                                        Paypal
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default Cart;