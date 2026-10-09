import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex-fill d-flex justify-content-center align-items-center bg-light">
      <div className="text-center p-4">
        <div style={{ fontSize: '5rem' }}>🍕</div>
        <h1 className="display-1 fw-bold">404</h1>
        <h2>¡Página no encontrada!</h2>
        <p className="text-muted">
          La página que buscas no existe o fue movida.
        </p>
        <Link to="/" className="btn btn-dark">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;