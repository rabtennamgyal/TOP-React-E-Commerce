    // This function will capture all the information about the product and 
    // create an object containing it's informations.

const addToCart = (e) => {
    const parentEl = e.target.parentElement.parentElement.parentElement;

    let productImg = parentEl.parentElement.children[0].children[0].children[0].src;
    let productName = parentEl.children[0].children[0].textContent;
    let productPrice = parentEl.children[1].children[0].textContent.split('').splice(7, 10).join('');
    let productSizeParent = parentEl.children[2].children[0];
    let productSize;
    let productQuantity = parentEl.children[2].children[1].children[0].value;

    const arr = [
        productSizeParent.children[0], productSizeParent.children[1], 
        productSizeParent.children[2], productSizeParent.children[3],
        productSizeParent.children[4]
    ];

    arr.forEach(el => {
        if (el.classList.contains('selected')) {
            productSize = el.children[0].textContent;
        };
    });

    const addedProduct = {
        img: productImg,
        name: productName,
        price: productPrice,
        size: productSize,
        qty: productQuantity
    };

    localStorage.setItem(productName, JSON.stringify(addedProduct));
};

const selectSize = (e) => {
    const parentEl = e.target;

    if (parentEl.style.backgroundColor !== '#70e2ff') {
        parentEl.style.backgroundColor = '#70e2ff';
        parentEl.classList.add('selected');
        // make sure of change color of already blue divs.
    };
};

const getCartItems = () => {
    const manutdjersey = localStorage.getItem('Manchester Unitd 2021 Authentic Jersey') ? 
    JSON.parse(localStorage.getItem('Manchester Unitd 2021 Authentic Jersey') ) : '';

    const chelseajersey = localStorage.getItem('Chelsea 2021 Authentic Jersey') ?
    JSON.parse(localStorage.getItem('Chelsea 2021 Authentic Jersey')) : '';

    const madridjersey = localStorage.getItem('Read Madrid 2021 Authentic Jersey') ? 
    JSON.parse(localStorage.getItem('Read Madrid 2021 Authentic Jersey')) : '';

    const barcajersey = localStorage.getItem('Barcalona 2021 Authentic Jersey') ? 
    JSON.parse(localStorage.getItem('Barcalona 2021 Authentic Jersey')) : '';

    const juvejersey = localStorage.getItem('Juventus 2021 Authentic Jersey') ?
    JSON.parse(localStorage.getItem('Juventus 2021 Authentic Jersey')) : '';

    const mancityjersey = localStorage.getItem('Manchester City 2021 Authentic Jersey') ?
    JSON.parse(localStorage.getItem('Manchester City 2021 Authentic Jersey')) : '';

    const liverpooljersey = localStorage.getItem('Liverpool 2021 Authentic Jersey') ?
    JSON.parse(localStorage.getItem('Liverpool 2021 Authentic Jersey')) : '';

    const munichjersey = localStorage.getItem('Bayern Munich 2021 Authentic Jersey') ?
    JSON.parse(localStorage.getItem('Bayern Munich 2021 Authentic Jersey')) : '';

    const psgjersey = localStorage.getItem('Paris Saint Germain 2021 Authentic Jersey') ?
    JSON.parse(localStorage.getItem('Paris Saint Germain 2021 Authentic Jersey')) : '';

    const cartItems = [
        manutdjersey, chelseajersey, madridjersey, barcajersey,
        juvejersey, mancityjersey, liverpooljersey, munichjersey,
        psgjersey
    ];

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};


export { addToCart, selectSize, getCartItems };