import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Jerseys from './components/jerseys';
import Shorts from "./components/shorts";
import Favorites from "./components/favorite";
import Cart from "./components/cart";
import Footer from "./components/footer";

// Jersey Links
import Manutd from "./components/productDetails.js/manutd";
import Chelsea from "./components/productDetails.js/chelsea";
import Madrid from "./components/productDetails.js/madrid";
import Barca from "./components/productDetails.js/barca";
import Juve from "./components/productDetails.js/juve";
import Mancity from "./components/productDetails.js/mancity";
import Liverpool from "./components/productDetails.js/liverpool";
import Munich from "./components/productDetails.js/munich";
import Psg from "./components/productDetails.js/psg";

// Shorts Links
import ManutdShorts from "./components/shortsDetails.js/manutd";
import ChelseaShorts from "./components/shortsDetails.js/chelsea";
import UsaShorts from "./components/shortsDetails.js/usa";
import PsgShorts from "./components/shortsDetails.js/psg";
import BarcaShorts from "./components/shortsDetails.js/barca";
import MunichShorts from "./components/shortsDetails.js/munich";
import MancityShorts from "./components/shortsDetails.js/mancity";
import ClubShorts from "./components/shortsDetails.js/club";
import LiverpoolShorts from "./components/shortsDetails.js/liverpool";


function RoutesSwitch() {

    const addToWishList = (e) => {
        e.preventDefault();

        if (e.target.style.color !== 'red') {
            e.target.style.color = 'red';

            const parent = e.target.parentElement;
            const itemImg = parent.childNodes[1].childNodes[0].src;
            const itemName = parent.childNodes[2].childNodes[0].textContent;
            const itemPrice = parent.childNodes[2].childNodes[1].textContent;
    
            const obj = {
                item: itemName,
                img: itemImg,
                price: itemPrice
            };
    
            localStorage.setItem(itemName, JSON.stringify(obj));
            
            // Jerseys 
            const madrid = localStorage.getItem('Real Madrid Jersey') ? JSON.parse(localStorage.getItem('Real Madrid Jersey')) : '';
            const manutd = localStorage.getItem('Man Utd Jersey') ? JSON.parse(localStorage.getItem('Man Utd Jersey')) : '';
            const chelsea = localStorage.getItem('Chelsea Jersey') ? JSON.parse(localStorage.getItem('Chelsea Jersey')) : '';
            const barca = localStorage.getItem('Barcalona Jersey') ? JSON.parse(localStorage.getItem('Barcalona Jersey')) : '';
            const juventus = localStorage.getItem('Juventus Jersey') ? JSON.parse(localStorage.getItem('Juventus Jersey')) : '';
            const mancity = localStorage.getItem('Man City Jersey') ? JSON.parse(localStorage.getItem('Man City Jersey')) : '';
            const liverpool = localStorage.getItem('Liverpool Jersey') ? JSON.parse(localStorage.getItem('Liverpool Jersey')) : '';
            const munich = localStorage.getItem('Munich Jersey') ? JSON.parse(localStorage.getItem('Munich Jersey')) : '';
            const psg = localStorage.getItem('PSG Jersey') ? JSON.parse(localStorage.getItem('PSG Jersey')) : '';
            // Shorts
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
        } else {
            e.target.style.color = '#000';
            
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
            // Shorts
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
        }
    }; 

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jersey" element={<Jerseys addToWishList={addToWishList} />} />
                <Route path="/manutd" element={<Manutd />} />
                <Route path="/chelsea" element={<Chelsea />} />
                <Route path="/madrid" element={<Madrid />} />
                <Route path="/barca" element={<Barca />} />
                <Route path="/juve" element={<Juve />} />
                <Route path="/mancity" element={<Mancity />} />
                <Route path="/liverpool" element={<Liverpool />} />
                <Route path="/munich" element={<Munich />} />
                <Route path="/psg" element={<Psg />} />

                <Route path="/shorts" element={<Shorts addToWishList={addToWishList} />} />
                <Route path="/manutdshort" element={<ManutdShorts />} />
                <Route path="/chelseashort" element={<ChelseaShorts />} />
                <Route path="/usashort" element={<UsaShorts />} />
                <Route path="/psgshort" element={<PsgShorts />} />
                <Route path="/barcashort" element={<BarcaShorts />} />
                <Route path="/munichshort" element={<MunichShorts />} />
                <Route path="/mancityshort" element={<MancityShorts />} />
                <Route path="/clubshort" element={<ClubShorts />} />
                <Route path="/liverpoolshort" element={<LiverpoolShorts />} />

                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RoutesSwitch;