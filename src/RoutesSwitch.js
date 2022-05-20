import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Jerseys from './components/jerseys';
import Footer from "./components/footer";

function RoutesSwitch() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jersey" element={<Jerseys />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RoutesSwitch;