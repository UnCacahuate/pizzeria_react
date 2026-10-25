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
import DetailView from './views/DetailView';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';


function App() {
  const { token } = useContext(UserContext)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>         
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage/>} />
            <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage/>} />
            <Route path="/cart" element={<Cart/>} /> 
            <Route path="/pizza/p001" element={<Pizza/>} />
            <Route path="/profile" element={token? <Profile/> : <Navigate to="/login"/>} />
            <Route path="/404" element={<NotFound/>} />
            <Route path="/detalle/:id" element={<DetailView/>} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;