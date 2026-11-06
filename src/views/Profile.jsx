import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect, useState, startTransition } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


function Profile() {
  const [perfil, setPerfil] = useState(null)
  const {getProfile, logout} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getProfile().then(data => setPerfil(data))
  }, [])

  return (
    <div
      className="modal show flex-fill d-flex justify-content-center align-items-center"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Perfil</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>{perfil ? perfil.email : "Cargando..."}</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={()=> startTransition(()=>{logout(); setPizzas([]); navigate("/")})}>Cerrar Sesión</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Profile;
