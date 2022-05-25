import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Jerseys from './components/jerseys';
import Shorts from "./components/shorts";
import Favorites from "./components/favorite";
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
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jersey" element={<Jerseys />} />
                <Route path="/manutd" element={<Manutd />} />
                <Route path="/chelsea" element={<Chelsea />} />
                <Route path="/madrid" element={<Madrid />} />
                <Route path="/barca" element={<Barca />} />
                <Route path="/juve" element={<Juve />} />
                <Route path="/mancity" element={<Mancity />} />
                <Route path="/liverpool" element={<Liverpool />} />
                <Route path="/munich" element={<Munich />} />
                <Route path="/psg" element={<Psg />} />

                <Route path="/shorts" element={<Shorts />} />
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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RoutesSwitch;