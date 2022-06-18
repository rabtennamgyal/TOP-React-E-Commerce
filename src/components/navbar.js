import { Link } from "react-router-dom";

function Navbar() {
    const showMobileMenu = () => {
        const hamburgers = document.querySelectorAll('.hamburgers');
        const mobileMenu = document.querySelector('.mobileMenu');
        const content = document.querySelector('.mobileMenuContent');

        if (mobileMenu.style.height === '100vh') {
            mobileMenu.style.height = '0';
            content.style.display = 'none';
            hamburgers[0].style.transform = 'rotate(0deg)';
            hamburgers[1].style.display = 'block';
            hamburgers[2].style.transform = 'rotate(0deg)';
        } else {
            mobileMenu.style.height = '100vh';
            hamburgers[0].style.transform = 'rotate(45deg)';
            hamburgers[1].style.display = 'none';
            hamburgers[2].style.transform = 'rotate(-45deg)';
            setTimeout(() => {
                content.style.display = 'flex';
            }, 500);
        };
    };

    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    let currentitem = 0;
    cartItems.forEach(el => {
        if (el !== '') {
            currentitem++;
        }
    });

    return(
        <div className='navbar'>
            <div className='navOne navBox'>
                <Link to='/'>
                    <li className="links">
                        Home
                    </li>
                </Link>

                <Link to='/jersey'>
                    <li className="links">
                        Jerseys
                    </li>
                </Link>

                <Link to='/shorts'>
                    <li className="links">
                        Shorts
                    </li>
                </Link>
            </div>

            <div className='navTwo navBox'>
                <Link to='/favorites'>
                    <li className="links">
                        <ion-icon name="heart-outline"></ion-icon>
                    </li>
                </Link>

                {/* 
                This should be made a link later on. 
                After I started studying backend.
                */}
                <li className="links">
                    <ion-icon name="person-outline"></ion-icon>
                </li>

                <Link to='/cart'>
                    <li className='links' id='cart'>
                        <ion-icon name="cart-outline"></ion-icon>
    
                        <div id="cartItems">
                            <p>    
                                {currentitem}
                            </p>
                        </div>
                    </li>
                </Link>
            </div>

            <div className='hamburger' onClick={showMobileMenu}>
                <span className="hamburgers"></span>
                <span className="hamburgers"></span>
                <span className="hamburgers"></span>
            </div>

            <div className="mobileMenu">
                <div className="mobileMenuContent">
                    <Link to='/' onClick={showMobileMenu}>
                        <li>
                            Home
                        </li>
                    </Link>
    
                    <Link to='/jersey' onClick={showMobileMenu}>
                        <li>
                            Jerseys
                        </li>
                    </Link>

                    <Link to='/shorts' onClick={showMobileMenu}>
                        <li>
                            Shorts
                        </li>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;












    // let position;
    // let current;

    // const hoverer = document.getElementById('hoverer');
    // const link = document.querySelectorAll('.links');
    // const links = Array.from(link);

    // function slideLine() {
    //     for (let i = 0; i < links.length; i++) {
    //         if (links[i].matches(":hover")) {
    //             const elleft = links[i].getBoundingClientRect().left;
    //             const elwidth = links[i].offsetWidth;
    //             position = elleft;
    //             current = links[i];
    //             hoverer.style.left = `${elleft}px`;
    //             hoverer.style.width = `${elwidth}px`;
    //             console.log('yes')
    //         }
    //     }
    // };

    // function setPos(pos, cur) {
    //     if (cur) {
    //         const val1 = cur.getBoundingClientRect().left;
    //         const val2 = cur.offsetWidth;
    //         hoverer.style.left = `${val1}px`;
    //         hoverer.style.width = `${val2}px`;
    //     }
    // };

    // setInterval(() => {
    //     slideLine();
    //     setPos(position, current);
    // });