import React from 'react';
import { Link } from 'react-router-dom';
import manutd from '../assets/shorts/manutd.webp';
import chelsea from '../assets/shorts/chelsea.webp';
import usa from '../assets/shorts/usa.jpeg';
import psg from '../assets/shorts/psg.webp';
import barca from '../assets/shorts/barca.webp';
import munich from '../assets/shorts/munich.webp';
import mancity from '../assets/shorts/mancity.webp';
import club from '../assets/shorts/club.webp';
import liverpool from '../assets/shorts/liverpool.webp';
import { useEffect } from 'react';


function Shorts({ addToWishList }) {
    useEffect(() => {
        const allFavs = localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : [];
        // eslint-disable-next-line no-unused-vars
        const shorts = allFavs.splice(0, Math.ceil(allFavs.length / 2)); 

        allFavs.forEach(el => {
            if (el.item !== undefined) {
                document.getElementById(el.item).style.color = 'red';
            }
        });
    });
    
    return (
        <div className='shorts'>
            <Link to='/manutdshort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Man Utd Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={manutd} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Man Utd Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/chelseashort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Chelsea Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={chelsea} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Chelsea Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/usashort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='USA Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={usa} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            USA Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/psgshort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='PSG Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={psg} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            PSG Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/barcashort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Barcalona Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={barca} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Barcalona Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/munichshort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Munich Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={munich} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Munich Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/mancityshort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Man City Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={mancity} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Man City Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/clubshort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Club America Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={club} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Club America Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>

            <Link to='/liverpoolshort'>
                <div className="catalogCard">
                    <ion-icon name="heart" id='Liverpool Shorts' onClick={addToWishList}></ion-icon>
    
                    <div className='catalogCardOne'>
                        <img src={liverpool} alt='img' />
                    </div>
    
                    <div className='catalogCardTwo'>
                        <h1>
                            Liverpool Shorts
                        </h1>
    
                        <p>
                            $ 30
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Shorts;