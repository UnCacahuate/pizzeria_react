import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (!email || !contrasena) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    alert('¡Autenticación exitosa!');
  };

  return (
    <div className="container my-5" style={{ maxWidth: '500px' }}>
      <h2>Login</h2>

      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={contrasena}
            onChange={(evento) => setContrasena(evento.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button type="submit" className="btn btn-dark">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;