import datas from './carousal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {    
    return (
        <div className="home">            
            <Carousel className='slider' autoPlay>
                {
                    datas.map((el, i) => {
                        return (
                            <div className='content'>
                                <img src={el.img} key={i} alt='img' />
                                <div className='textholder'>
                                    <h1>
                                        {el.text}
                                    </h1>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>

            <div className='demo'>
                
            </div>
        </div>
    )
};

export default Home;


































