import React, { useState } from 'react'
import { pizzaCart } from '../assets/js/Pizzas'

export default function Cart() {
  const [cart, setPizzaCart] = useState(pizzaCart)

  const valorFinal = cart.reduce((acumulado, item) => acumulado + item.price * item.count, 0)

  const sumarElemento = (id) => {
    setPizzaCart(cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ))
  }

  const restarElemento = (id) => {
    const actualizado = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
    )
    setPizzaCart(actualizado.filter((pizza) => pizza.count > 0))
  }

  return (
    <div className="container m-5">
      <h3>Detalles del pedido:</h3>

      {cart.map((item) => (
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

      <h2 className="fw-bold mt-4">Total: ${valorFinal.toLocaleString('es-CL')}</h2>
      <button type="button" className="btn btn-dark">Pagar</button>
    </div>
  )
}