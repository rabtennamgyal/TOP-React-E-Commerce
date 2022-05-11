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
            <div className='buttons' id='left'>
                <button onClick={prev}>
                    &larr;
                </button>
            </div>

            <div className="carousal">
                {
                    carousalData.map((el, i) => {
                        return (
                            <div className="cards" key={i}>
                                {i === cur && (<img src={el.img} alt='img' />)}
                            </div>
                        )
                    })
                }
            </div>

            <div className='buttons' id='right'>
                <button onClick={next}>
                    &rarr;
                </button>
            </div>
        </div>
    )
};

export default Home;


































