import one from '../../assets/catalog/mancity.jpg';
import two from '../../assets/catalog/mancity2.jpg';
import three from '../../assets/catalog/mancity3.jpg';


function Mancity() {
    const arrs = [one, two, three];

    setInterval(() => {
        const imgs = document.querySelectorAll('.thumbnails');

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('mouseover', () => {
                const cur = arrs[i];
                document.getElementById('mancityfeatured').src = cur;
            });
        };
    });

    return (
        <div className="productDetails">
            <div className="divOne">
                <div className='mainimg'>
                    <img id='mancityfeatured' src={one} alt='img' />
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
                        Manchester City 2021 Authentic Jersey
                    </h1>
                </div>

                <div className='productPrice'>
                    <p>
                        Price: $50
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
                        <div>

                        </div>

                        <div className='addCart'>
                            <button>
                                Add Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mancity;