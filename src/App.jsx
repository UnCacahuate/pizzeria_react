import Navbar from './components/Navbar';
import Pizza from './views/Pizza';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/Footer';
import Cart from './views/Cart';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import Profile from './views/Profile';
import NotFound from './views/NotFound';


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>         
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/cart" element={<Cart/>} /> 
            <Route path="/pizza/p001" element={<Pizza/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/404" element={<NotFound/>} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;