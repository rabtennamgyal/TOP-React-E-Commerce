import one from '../../assets/shorts/psg.webp';
import two from '../../assets/shorts/psg2.webp';
import three from '../../assets/shorts/psg3.webp';

function PsgShorts() {
    const arrs = [one, two, three];

    setInterval(() => {
        const imgs = document.querySelectorAll('.thumbnails');

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('mouseover', () => {
                const cur = arrs[i];
                document.getElementById('psgshorts').src = cur;
            });
        };
    });

    return (
        <div className="productDetails">
            <div className="divOne">
                <div className='mainimg'>
                    <img id='psgshorts' src={one} alt='img' />
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
                        PSG 2021 Authentic Shorts
                    </h1>
                </div>

                <div className='productPrice'>
                    <p>
                        Price: $30
                    </p>
                </div>

                <div className='productInfo'>
                    <div className='size'>
                        <div className='sizes xs'>
                            <p>
                                XS
                            </p>
                        </div>

                        <div className='sizes s'>
                            <p>
                                S
                            </p>
                        </div>

                        <div className='sizes m'>
                            <p>
                                M
                            </p>
                        </div>

                        <div className='sizes l'>
                            <p>
                                L
                            </p>
                        </div>

                        <div className='sizes xl'>
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
                        <button>
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PsgShorts;