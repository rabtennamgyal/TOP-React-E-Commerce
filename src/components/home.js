import { useState } from 'react';
import datas from './carousal';
import { CSSTransition } from 'react-transition-group';


function Home() {    
    const [inProp, setInProp] = useState(false);
    const [cur, setcur] = useState(0);
    const length = 3;

    const next = () => {
        setcur(cur === length - 1 ? 0 : cur + 1);
        setInProp(true);
        setTimeout(() => {
            setInProp(false);
        });
    };

    const prev = () => {
        setcur(cur === 0 ? length - 1 : cur - 1);
        setInProp(true);
        setTimeout(() => {
            setInProp(false);
        });
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
                            <CSSTransition
                                in={inProp} 
                                timeout={500}
                                key={i}
                                classNames='homecards'
                            >
                                <div id='el' className='cards' key={i}>
                                    {i === cur && (<img id='img' src={el.img} alt='img' />)}
                                    {i === cur && (<div id='texts'><h1>{el.text}</h1></div>)}
                                </div>
                            </CSSTransition>
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