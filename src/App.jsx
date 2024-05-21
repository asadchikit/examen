import "./App.css";
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import All from "./pages/All/All";
import Home from "./pages/Home/Home";
import { Faq } from "./pages/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import About from "./pages/Aboutus/About";
import {Headphone} from "./pages/Headphone/Headphone"
import { Laptopsinfo } from "./pages/Laptopsinfo/Laptopsinfo";
import YourCart from "./pages/Yourcart/Yourcart";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/products" element={<Products />} />
        <Route path="/laptopsinfo" element={<Laptopsinfo />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/headphone" element={<Headphone />} />

        <Route path="/yourcart" element={<YourCart />} />
        <Route path="/returns" element={""} />
        <Route path="/order" element={""} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
