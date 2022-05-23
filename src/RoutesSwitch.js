import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Jerseys from './components/jerseys';
import Footer from "./components/footer";
import Manutd from "./components/productDetails.js/manutd";
import Chelsea from "./components/productDetails.js/chelsea";
import Madrid from "./components/productDetails.js/madrid";
import Barca from "./components/productDetails.js/barca";
import Juve from "./components/productDetails.js/juve";
import Mancity from "./components/productDetails.js/mancity";
import Liverpool from "./components/productDetails.js/liverpool";
import Munich from "./components/productDetails.js/munich";
import Psg from "./components/productDetails.js/psg";


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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RoutesSwitch;