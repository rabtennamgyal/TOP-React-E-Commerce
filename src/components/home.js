import { useState } from "react";
import carousalData from "../assets/carousalData";

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
                        &larr;
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
                        &rarr;
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
                        <p>
                            We are a No-Frills Football Store providing the 
                            best Football uniforms and cleats at the cheapest 
                            prices as possible. Don't doubt us though, our cheap
                            prices doesn't equate to a poor quality merchandise. 
                            We sell authentic top quality kits straight from the 
                            manufacturer such as Nike, Adidas and Puma.
                        </p>
                    </div>

                    <div className="introTwoTwo">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;


































