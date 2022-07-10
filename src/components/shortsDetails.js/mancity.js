import one from '../../assets/shorts/mancity.webp';
import two from '../../assets/shorts/mancity2.webp';
import three from '../../assets/shorts/mancity3.webp';
import { addToCart, selectSize } from '../resuableFunc';

function MancityShorts() {
    const arrs = [one, two, three];

    setInterval(() => {
        const imgs = document.querySelectorAll('.thumbnails');

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('mouseover', () => {
                const cur = arrs[i];
                document.getElementById('mancityshorts').src = cur;
            });
        };
    });

    return (
        <div className="productDetails">
            <div className="divOne">
                <div className='mainimg'>
                    <img id='mancityshorts' src={one} alt='img' />
                </div>

                <div className='slider'>
                    <div className='imgDivs'>
                        <img className='thumbnails' src={one} alt='img' />
                    </div>

                    <div className='imgDivs'>
                        <img className='thumbnails' src={two} alt='img' />
                    </div>

                    <div className='imgDivs'>
                        <img className='thumbnails' src={three} alt='img' />
                    </div>
                </div>
            </div>

            <div className="divTwo">
                <div className='productTitle'>
                    <h1>
                        Manchester City Shorts
                    </h1>
                </div>

                <div className='productPrice'>
                    <p>
                        Price: $30
                    </p>
                </div>

                <div className='productInfo'>
                    <div className='size'>
                        <div className='sizes xs' onClick={selectSize}>
                            <p>
                                XS
                            </p>
                        </div>

                        <div className='sizes s' onClick={selectSize}>
                            <p>
                                S
                            </p>
                        </div>

                        <div className='sizes m' onClick={selectSize}>
                            <p>
                                M
                            </p>
                        </div>

                        <div className='sizes l' onClick={selectSize}>
                            <p>
                                L
                            </p>
                        </div>

                        <div className='sizes xl' onClick={selectSize}>
                            <p>
                                XL
                            </p>
                        </div>
                    </div>

                    <div className='quantity'>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className='submit'>
                        <button onClick={addToCart}>
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MancityShorts;