import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
// import Home from './components/Home';
import Footer from './components/Footer';
// import Cart from './components/Cart';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Pizza />
{/*     <RegisterPage/>
        <LoginPage/>
        <Cart/>
        <Home />
          */}
      </main>
      <Footer />
    </div>
  );
}

export default App;