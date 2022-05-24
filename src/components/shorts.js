import { Link } from 'react-router-dom';
import manutd from '../assets/shorts/manutd.webp';
import chelsea from '../assets/shorts/chelsea.webp';
import usa from '../assets/shorts/usa.jpeg';
import psg from '../assets/shorts/psg.webp';
import barca from '../assets/shorts/barca.webp';


function Shorts() {
    return (
        <div className='shorts'>
            <Link to='/manutdshort'>
                <div className="catalogCard">
                    <ion-icon name="heart-outline" id='favoriteIt'></ion-icon>
    
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
                    <ion-icon name="heart-outline" id='favoriteIt'></ion-icon>
    
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
                    <ion-icon name="heart-outline" id='favoriteIt'></ion-icon>
    
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
                    <ion-icon name="heart-outline" id='favoriteIt'></ion-icon>
    
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
                    <ion-icon name="heart-outline" id='favoriteIt'></ion-icon>
    
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
        </div>
    )
};

export default Shorts;