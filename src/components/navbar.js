function Navbar() {
    return(
        <div className='navbar'>
            <div className='navOne navBox'>
                <li>
                    Home
                </li>
    
                <li>
                    Jerseys
                </li>

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

                <li>
                    <ion-icon name="cart-outline"></ion-icon>
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