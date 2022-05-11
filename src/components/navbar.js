import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className='navbar'>
            <div className='navOne navBox'>
                <Link to='/'>
                    <li>
                        Home
                    </li>
                </Link>

                <Link to='/jersey'>
                    <li>
                        Jerseys
                    </li>
                </Link>

                <li>
                    Shorts
                </li>
    
                <li>
                    Footwears
                </li>
            </div>

            <div className='navTwo navBox'>
                <li>
                    <ion-icon name="heart-outline"></ion-icon>
                </li>

                <li id='cart'>
                    <ion-icon name="cart-outline"></ion-icon>

                    <div id="cartItems">
                        <p>    
                            0
                        </p>
                    </div>
                </li>
            </div>

            <div className='hamburger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Navbar;