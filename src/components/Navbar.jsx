import { formatearMoneda } from '../utilitarios/formatearMoneda';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1">Cacahuate's Pizzeria!</span>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-light btn-sm">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Perfil</button>
            <button className="btn btn-outline-light btn-sm">🔒 Cerrar sesión</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Ingresar</button>
            <button className="btn btn-outline-light btn-sm">🔐 Registrarse</button>
          </>
        )}

        <button className="btn btn-outline-light btn-sm">
          🛒 Total: ${formatearMoneda(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;