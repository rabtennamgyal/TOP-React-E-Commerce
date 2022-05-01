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
                    Boots
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
        </div>
    );
};

export default Navbar;