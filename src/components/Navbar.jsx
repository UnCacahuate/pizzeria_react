import { formatearMoneda } from '../utilitarios/formatearMoneda';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1">Cacahuate's Pizzeria!</span>

      <div className="d-flex gap-2">
        <Link to="/">
          <button className="btn btn-outline-light btn-sm">🍕 Home</button>
        </Link>

        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Perfil</button>
            <button className="btn btn-outline-light btn-sm">🔒 Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline-light btn-sm">🔐 Ingresar</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline-light btn-sm">🔐 Registrarse</button>
            </Link>
          </>
        )}
        
        <Link to="/profile">
          <button className="btn btn-outline-light btn-sm">👤 Perfil</button>
        </Link>
        <Link to="/cart">
          <button className="btn btn-outline-light btn-sm">
            🛒 Total: ${formatearMoneda(total)}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;