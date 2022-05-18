import manutd from '../assets/catalog/manutd.jpeg';
import chelsea from '../assets/catalog/chelsea.webp';
import realmadrid from '../assets/catalog/realmadrid.webp';
import barca from '../assets/catalog/barca.jpeg';
import juve from '../assets/catalog/juve.webp';
import mancity from '../assets/catalog/mancity.jpg';


function Jerseys() {
    return (
        <div className="jerseys">
            <div className="catalogCard">
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

            <div className="catalogCard">
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

            <div className="catalogCard">
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

            <div className="catalogCard">
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

            <div className="catalogCard">
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

            <div className="catalogCard">
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
        </div>
    )
};

export default Jerseys;