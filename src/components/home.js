import { useState } from "react";
import carousalData from "../assets/carousalData";
import jersey from "../assets/soccer-jersey.png";
import shorts from "../assets/football-shorts.png";
import cleats from "../assets/cleats.png";
import ball from "../assets/football.png";

function Home() {    
    const [cur, setcur] = useState(0);
    const length = carousalData.length;

    const next = () => {
        setcur(cur === length - 1 ? 0 : cur + 1);
    };
    
    const prev = () => {
        setcur(cur === 0 ? length - 1 : cur - 1);
    };

    return (
        <div className="home">    
            <div className="carousal">
                <div className='buttons' id='left'>
                    <button onClick={prev}>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </button>
                </div>

                {
                    carousalData.map((el, i) => {
                        return (
                            <div className="cards" key={i}>
                                {i === cur && (<img src={el.img} alt='img' />)}
                            </div>
                        )
                    })
                }

                <div className='buttons' id='right'>
                    <button onClick={next}>
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


































