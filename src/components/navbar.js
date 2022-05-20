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

        console.log(hamburgers)
    };

    return(
        <div className='navbar'>
            {/* <span className="hoverer" id='hoverer'>

            </span> */}

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

                <li className="links">
                    Shorts
                </li>
    
                <li className="links">
                    Footwears
                </li>
            </div>

            <div className='navTwo navBox'>
                <li className="links">
                    <ion-icon name="heart-outline"></ion-icon>
                </li>

                <li className="links">
                    <ion-icon name="person-outline"></ion-icon>
                </li>

                <li className='links' id='cart'>
                    <ion-icon name="cart-outline"></ion-icon>

                    <div id="cartItems">
                        <p>    
                            0
                        </p>
                    </div>
                </li>
            </div>

            <div className='hamburger' onClick={showMobileMenu}>
                <span className="hamburgers"></span>
                <span className="hamburgers"></span>
                <span className="hamburgers"></span>
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