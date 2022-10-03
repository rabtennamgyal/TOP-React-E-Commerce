import { useRef } from 'react';
import jersey from "../assets/random/soccer-jersey.png";
import shorts from "../assets/random/football-shorts.png";
import cleats from "../assets/random/cleats.png";
import ball from "../assets/random/football.png";
import one from '../assets/random/three.jpg';
import two from '../assets/random/two.jpg';
import three from '../assets/random/four.webp';


function Home() {    
    const a = useRef(one);
    const b = useRef(two);
    const c = useRef(three);

    const arr = [a, b, c];
    let cur = 0;
    let max = arr.length;

    const slideLeft = () => {
        if (cur === 0) {
            cur = max - 1;
        } else {
            cur--;
        };

        arr.forEach((el, i) => {
            el.current.style.transform = `translateX(${100 * (i - cur)}%)`;
        });
    };

    const slideRight = () => {
        if (cur === max - 1) {
            cur = 0;
        } else {
            cur++;
        };

        arr.forEach((el, i) => {
            el.current.style.transform = `translateX(${100 * (i - cur)}%)`;
        });
    }

    return (
        <div className="home">    
            <div className="carousal">
                <div className='buttons' id='left'>
                    <button onClick={slideLeft}>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </button>
                </div>

                <div className="carouselBox">
                    <img id='imgOne' ref={a} src={one} alt='football cleats on display' />
                    <img id='imgTwo' ref={b} src={two} alt='football cleats on display' />
                    <img id='imgThree' ref={c} src={three} alt='football cleats on display' />
                </div>

                <div className='buttons' id='right'>
                    <button onClick={slideRight}>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                </div>
            </div>

            <div className="intro">
                <div className="introOne">
                    <h1>
                        No-Frills Football Store
                    </h1>
                </div>

                <div className="introTwo">
                    <div className="introTwoOne">
                        <div className="textContent">
                            <p>
                                We are a No-Frills Football Store providing the best Football uniforms and 
                                cleats at the cheapest prices as possible. Don't doubt us though, our cheap
                                prices doesn't equate to a poor quality merchandise. We sell authentic top 
                                quality items straight from manufacturer such as Nike, Adidas and Puma.
                            </p>
                        </div>
                    </div>

                    <div className="introTwoTwo">
                        <div className="boxes">
                            <img src={jersey} alt='jersey' />

                            <div className="boxes2">
                                <h1>
                                    We got Jerseys
                                </h1>
                            </div>
                        </div>

                        <div className="boxes">
                            <img src={shorts} alt='shorts' />

                            <div className="boxes2">
                                <h1>
                                    We got Shorts
                                </h1>
                            </div>
                        </div>

                        <div className="boxes">
                            <img src={cleats} alt='cleats' />

                            <div className="boxes2">
                                <h1>
                                    We got Cleats
                                </h1>
                            </div>
                        </div>


                        <div className="boxes">
                            <img src={ball} alt='ball' />

                            <div className="boxes2">
                                <h1>
                                    We got everything
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;


































