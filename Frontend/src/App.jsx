import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Cart from "./components/Cart";
import AdminDashboard from "./components/AdminDashboard";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element= {<SignUp/>} />
        <Route path="/signIn" element={<Login/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        

          {/* <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/hand-and-body" element={<div>Hand and Body</div>} />
        <Route path="/fragrance" element={<div>Fragrance</div>} />
        <Route path="/skin-care" element={<div>Skin Care</div>} />
        <Route path="/signup" element={<div>Sign Up</div>} />
        <Route path="/signin" element={<div>Sign In</div>} /> */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
