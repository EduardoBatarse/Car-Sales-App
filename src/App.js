import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Accessories from './pages/Accessories';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetail from './components/CarDetail';
import AccessoriesDetails from './components/AccessoriesDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import { CartProvider } from './context/CartContext'; // Asegúrate de que la ruta es correcta
import Cart from './components/Cart'; // Importar el componente del carrito

const App = () => {
  return (
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:id" element={<AccessoriesDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} /> {/* Añadir ruta para el carrito */}
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
