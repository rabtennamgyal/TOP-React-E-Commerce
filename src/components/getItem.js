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