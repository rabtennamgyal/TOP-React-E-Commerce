/* eslint-disable array-callback-return */
import deleteItem from "./getItem";

function Favorites() {
    const wishlist = localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : [];

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
                                <ion-icon name="close-outline" id='delete' onClick={deleteItem}></ion-icon>

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