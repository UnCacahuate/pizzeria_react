import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (!email || !contrasena || !confirmarContrasena) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('¡Registro exitoso!');
  };

  return (
    <div className="container my-5" style={{ maxWidth: '500px' }}>
      <h2>Registro</h2>

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

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            value={confirmarContrasena}
            onChange={(evento) => setConfirmarContrasena(evento.target.value)}
            placeholder="Confirma tu contraseña"
          />
        </div>

        <button type="submit" className="btn btn-dark">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;