import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext()

const CartProvider = ({children}) => {

  const [pizzas, setPizzas] = useState([])

  const valorTotal = pizzas.reduce((acumulado, item) => acumulado + item.price * item.count, 0)

  const anadirPizza = (pizza) => {
    setPizzas((prev) =>
      prev.some((item) => item.id === pizza.id)
        ? prev.map((item) =>
            item.id === pizza.id ? { ...item, count: item.count + 1 } : item
          )
        : [...prev, { ...pizza, count: 1 }]
    )
  }

  const sumarElemento = (id) => {
    setPizzas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const restarElemento = (id) => {
    setPizzas((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    )
  }

  return (
    <CartContext.Provider value={{pizzas, valorTotal, anadirPizza, sumarElemento, restarElemento}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider