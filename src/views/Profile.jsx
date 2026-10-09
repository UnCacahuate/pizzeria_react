import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function Profile() {
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
          <h3>emaildeprueba@email.com</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Cerrar Sesión</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Profile;
