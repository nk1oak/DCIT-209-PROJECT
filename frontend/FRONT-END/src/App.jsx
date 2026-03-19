import { Routes, Route } from "react-router-dom";
import Navbar from './Accessories/navbar';
import Categories from './Accessories/categories';
import Brands from './Accessories/brands';
import Home from './Accessories/Home';
import Contact from './Accessories/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;