/* eslint-disable array-callback-return */
//import { useEffect } from "react";

function Favorites() {
    const wishlist = localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : [];
    console.log(wishlist);

    const madrid = localStorage.getItem('Real Madrid Jersey') ? JSON.parse(localStorage.getItem('Real Madrid Jersey')) : '';
    const manutd = localStorage.getItem('Man Utd Jersey') ? JSON.parse(localStorage.getItem('Man Utd Jersey')) : '';
    const chelsea = localStorage.getItem('Chelsea Jersey') ? JSON.parse(localStorage.getItem('Chelsea Jersey')) : '';

    const arr = [manutd, chelsea, madrid];
    localStorage.setItem('arr', JSON.stringify(arr));

    return (
        <div className="favorites">
            <div className="title">
                <h1>
                    Your Favorited Items:
                </h1> 
            </div>

            <div className="items">
                {wishlist.map((el, i) => {
                    if (el !== '') {
                        return (
                            <div className="itemsContent" key={i}>
                                <img src={el.img} alt='img' />
                                <div className="itemDetails">
                                    <h1>{el.item}</h1>
                                    <h1>{el.price}</h1>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default Favorites;