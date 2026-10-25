import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { UserContext } from '../contexts/UserContext'

export default function Cart() {
  const { pizzas, valorTotal, sumarElemento, restarElemento } = useContext(CartContext)
  const { token } = useContext(UserContext)

  return (
    <div className="container m-5">
      <h3>Detalles del pedido:</h3>

      {pizzas.length === 0 && <p>Tu carrito está vacío.</p>}

      {pizzas.map((item) => (
        <div className="d-flex align-items-center gap-3 mb-3" key={item.id}>
          <img
            src={item.img}
            alt={item.desc}
            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
          />

          <span className="text-capitalize" style={{ minWidth: '120px' }}>{item.name}</span>

          <span style={{ minWidth: '80px' }}>${item.price.toLocaleString('es-CL')}</span>

          <button className="btn btn-outline-danger btn-sm" onClick={() => restarElemento(item.id)}>-</button>
          <span>{item.count}</span>
          <button className="btn btn-outline-primary btn-sm" onClick={() => sumarElemento(item.id)}>+</button>
        </div>
      ))}

      <h2 className="fw-bold mt-4">Total: ${valorTotal.toLocaleString('es-CL')}</h2>
      
      <button type="button" className="btn btn-dark" disabled={!token}>Pagar</button>

    </div>
  )
}