import { Link } from "react-router-dom";

function Navbar() {
    const showMobileMenu = () => {
        const mobileMenu = document.querySelector('.mobileMenu');
        const content = document.querySelector('.mobileMenuContent');

        if (mobileMenu.style.height === '100vh') {
            mobileMenu.style.height = '0';
            content.style.display = 'none';
        } else {
            mobileMenu.style.height = '100vh';
            setTimeout(() => {
                content.style.display = 'flex';
            }, 100);
        };
    };

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

            <div className='hamburger' onClick={showMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="mobileMenu">
                <div className="mobileMenuContent">
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

                {/* <Link>
                    <li>
                        Shorts
                    </li>
                </Link>

                <Link>
                    <li>
                        Footwears
                    </li>
                </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;