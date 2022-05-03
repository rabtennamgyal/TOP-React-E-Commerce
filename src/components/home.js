import { useState } from 'react';
import datas from './carousal';

function Home() {    
    const [cur, setcur] = useState(0);
    const length = 3;

    const next = () => {
        setcur(cur === length - 1 ? 0 : cur + 1)
    };

    const prev = () => {
        setcur(cur === 0 ? length - 1 : cur - 1)
    };

    return (
        <div className="home">
            <div className="container">              
                <button className="left" id='carBtn' onClick={prev}>
                    &larr;
                </button>

                <div className='carBox'>
                    {datas.map((el, i) => {
                        return (
                            <div id='el' className='cards' key={i}>
                                {i === cur && (<img id='img' src={el.img} alt='img' />)}
                                {i === cur && (<div id='texts'><h1>{el.text}</h1></div>)}
                            </div>
                        );
                    })};
                </div>

                <button className="right" id='carBtn' onClick={next}>
                    &rarr;
                </button>
            </div>
        </div>
    )
};

export default Home;