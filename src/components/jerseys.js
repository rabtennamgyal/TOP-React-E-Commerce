import { Link } from 'react-router-dom';
import manutd from '../assets/catalog/manutd.jpeg';
import chelsea from '../assets/catalog/chelsea.webp';
import realmadrid from '../assets/catalog/realmadrid.webp';
import barca from '../assets/catalog/barca.jpeg';
import juve from '../assets/catalog/juve.webp';
import mancity from '../assets/catalog/mancity.jpg';
import liverpool from '../assets/catalog/liverpool.webp';
import munich from '../assets/catalog/munich.webp';
import psg from '../assets/catalog/psg.webp';
import { useEffect } from 'react';

// maybe I need a useState to trigger the function 

function Jerseys({ addToWishList }) {
    useEffect(() => {
        const allFavs = localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : [];

        allFavs.forEach(el => {
            if (el.item !== undefined) {
                console.log(el.item);
                document.getElementById(el.item).style.color = 'red';
            }
        })
    });

    return (
        <div className="jerseys">
            <Link to='/manutd'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Man Utd Jersey' onClick={addToWishList}></ion-icon>

                    <div className='catalogCardOne'>
                        <img src={manutd} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Man Utd Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/chelsea'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Chelsea Jersey' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={chelsea} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Chelsea Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/madrid'>    
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={realmadrid} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Real Madrid Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/barca'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={barca} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Barcelona Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/juve'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={juve} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Juventus Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/mancity'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={mancity} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Man City Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>
            
            <Link to='/liverpool'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={liverpool} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Liverpool Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/munich'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={munich} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Munich Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/psg'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='favoriteIt' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={psg} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Paris Saint Germain Jersey
                        </h1>
    
                        <p>
                            $ 50
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Jerseys;