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

    // this updates the subtotal, shipping, tax & total in the local storage.
    const allstorageKeys = [];
    
    for (let keys in localStorage) {
        allstorageKeys.push(keys);
    };
    
    if (!allstorageKeys.includes(productName)) {
        const subtotal = localStorage.getItem('subtotal') ? JSON.parse(localStorage.getItem('subtotal')) : [];
        const tax = localStorage.getItem('tax') ? JSON.parse(localStorage.getItem('tax')) : 0.00;
        // extract the item's price and quantity. Then multiply it and then reduce it into subtotal.
        // a. Subtotal
        const itemPrice = Number(productPrice.split('').splice(1, productPrice.length).join(''));
        const itemQuantity = Number(productQuantity);
        const totalItemPrice = itemPrice * itemQuantity;
        // b. Tax
        const calculatedTax = (totalItemPrice * (5 / 100)) + tax;

        // Push the totalItemPrice into the subtotal array in local storage.
        subtotal.push(totalItemPrice);

        const updatedST = [subtotal.reduce((a, b) => a + b)];
        // also do shipping and tax updated later.
        localStorage.setItem('subtotal', JSON.stringify(updatedST));
        localStorage.setItem('tax', JSON.stringify(calculatedTax));
    };

    localStorage.setItem(productName, JSON.stringify(addedProduct));
    window.location.reload();
};

const selectSize = (e) => {
    const parentEl = e.target;

    const arr = e.target.parentElement.childNodes;
    let allSizes = Array.from(arr);

    allSizes.forEach(el => {
        if (el.classList.contains('selected')) {
            el.classList.remove('selected');
            el.style.backgroundColor = '#fff';
        };
    });

    if (parentEl.style.backgroundColor !== '#70e2ff') {
        parentEl.style.backgroundColor = '#70e2ff';
        parentEl.classList.add('selected');
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

    const manutdshorts = localStorage.getItem('Manchester United Shorts') ? 
    JSON.parse(localStorage.getItem('Manchester United Shorts')) : '';

    const chelseashorts = localStorage.getItem('Chelsea 2021 Authentic Shorts') ? 
    JSON.parse(localStorage.getItem('Chelsea 2021 Authentic Shorts')) : '';

    const usashorts = localStorage.getItem('USA National Team Authentic Shorts') ?
    JSON.parse(localStorage.getItem('USA National Team Authentic Shorts')) : '';
    
    const psgshorts = localStorage.getItem('PSG 2021 Authentic Shorts') ?
    JSON.parse(localStorage.getItem('PSG 2021 Authentic Shorts')) : '';

    const barcashorts = localStorage.getItem('Barca Strike Shorts') ?
    JSON.parse(localStorage.getItem('Barca Strike Shorts')) : '';

    const munichshorts = localStorage.getItem('Munich Shorts') ?
    JSON.parse(localStorage.getItem('Munich Shorts')) : '';

    const mancityshorts = localStorage.getItem('Manchester City Shorts') ?
    JSON.parse(localStorage.getItem('Manchester City Shorts')) : '';

    const clubshorts = localStorage.getItem('Club America Authentic Shorts') ?
    JSON.parse(localStorage.getItem('Club America Authentic Shorts')) : '';

    const liverpoolshorts = localStorage.getItem('Liverpool Authentic Shorts') ?
    JSON.parse(localStorage.getItem('Liverpool Authentic Shorts')) : '';

    const cartItems = [
        manutdjersey, chelseajersey, madridjersey, barcajersey,
        juvejersey, mancityjersey, liverpooljersey, munichjersey,
        psgjersey, manutdshorts, chelseashorts, usashorts, psgshorts,
        barcashorts, munichshorts, mancityshorts, clubshorts, liverpoolshorts
    ];

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const deleteItem = (e) => {
    const parent = e.target.parentElement;
    const itemName = parent.childNodes[2].childNodes[0].textContent;
    localStorage.removeItem(itemName);

    // Jersey
    const madrid = localStorage.getItem('Real Madrid Jersey') ? JSON.parse(localStorage.getItem('Real Madrid Jersey')) : '';
    const manutd = localStorage.getItem('Man Utd Jersey') ? JSON.parse(localStorage.getItem('Man Utd Jersey')) : '';
    const chelsea = localStorage.getItem('Chelsea Jersey') ? JSON.parse(localStorage.getItem('Chelsea Jersey')) : '';
    const barca = localStorage.getItem('Barcalona Jersey') ? JSON.parse(localStorage.getItem('Barcalona Jersey')) : '';
    const juventus = localStorage.getItem('Juventus Jersey') ? JSON.parse(localStorage.getItem('Juventus Jersey')) : '';
    const mancity = localStorage.getItem('Man City Jersey') ? JSON.parse(localStorage.getItem('Man City Jersey')) : '';
    const liverpool = localStorage.getItem('Liverpool Jersey') ? JSON.parse(localStorage.getItem('Liverpool Jersey')) : '';
    const munich = localStorage.getItem('Munich Jersey') ? JSON.parse(localStorage.getItem('Munich Jersey')) : '';
    const psg = localStorage.getItem('PSG Jersey') ? JSON.parse(localStorage.getItem('PSG Jersey')) : '';
    // // Shorts
    const manutd2 = localStorage.getItem('Man Utd Shorts') ? JSON.parse(localStorage.getItem('Man Utd Shorts')) : '';
    const chelsea2 = localStorage.getItem('Chelsea Shorts') ? JSON.parse(localStorage.getItem('Chelsea Shorts')) : '';
    const usa = localStorage.getItem('USA Shorts') ? JSON.parse(localStorage.getItem('USA Shorts')) : '';
    const barca2 = localStorage.getItem('Barcalona Shorts') ? JSON.parse(localStorage.getItem('Barcalona Shorts')) : '';
    const mancity2 = localStorage.getItem('Man City Shorts') ? JSON.parse(localStorage.getItem('Man City Shorts')) : '';
    const munich2 = localStorage.getItem('Munich Shorts') ? JSON.parse(localStorage.getItem('Munich Shorts')) : '';
    const psg2 = localStorage.getItem('PSG Shorts') ? JSON.parse(localStorage.getItem('PSG Shorts')) : '';
    const liverpool2 = localStorage.getItem('Liverpool Shorts') ? JSON.parse(localStorage.getItem('Liverpool Shorts')) : '';
    const club = localStorage.getItem('Club America Shorts') ? JSON.parse(localStorage.getItem('Club America Shorts')) : '';

    const arr = [
        manutd, chelsea, madrid, barca, juventus, mancity, liverpool, munich, psg,
        manutd2, chelsea2, usa, barca2, club, mancity2, liverpool2, munich2, psg2
    ]; // this arr data get turn into wishlist.

    localStorage.setItem('arr', JSON.stringify(arr));
    window.location.reload();
};


export default deleteItem;


export { addToCart, selectSize, getCartItems, deleteItem };