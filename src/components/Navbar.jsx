import { useContext, startTransition } from 'react';
import { formatearMoneda } from '../utilitarios/formatearMoneda';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const {valorTotal, pizzas} = useContext(CartContext)
  const totalItems = pizzas.reduce((acumulado, item) => acumulado + item.count, 0)
  const { token, logout } = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1">Cacahuate's Pizzeria!</span>

      <div className="d-flex gap-2">
        <NavLink to="/" className={({isActive})=> isActive? "btn btn-light btn-sm" : "btn btn-outline-light btn-sm"}>
            🍕 Home
        </NavLink>

        {token ? (
          <>
            <NavLink to="/profile" className={({isActive})=> isActive? "btn btn-light btn-sm" : "btn btn-outline-light btn-sm"}>
              👤 Perfil
            </NavLink>
            <button className="btn btn-outline-light btn-sm" onClick={()=> startTransition(()=>{logout(); navigate("/")})}>🔒 Cerrar sesión</button >
          </>
        ) : (
          <>
            <NavLink to="/login" className={({isActive})=> isActive? "btn btn-light btn-sm" : "btn btn-outline-light btn-sm"}>
              🔐 Ingresar
            </NavLink>
            <NavLink to="/register" className={({isActive})=> isActive? "btn btn-light btn-sm" : "btn btn-outline-light btn-sm"}>
              🔐 Registrarse
            </NavLink>
          </>
        )}
        <NavLink to="/cart" className={({isActive})=> isActive? "btn btn-light btn-sm" : "btn btn-outline-light btn-sm"}>
            🛒 Items: {totalItems} Total: ${formatearMoneda(valorTotal)}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;