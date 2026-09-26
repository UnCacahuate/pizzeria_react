import { useState } from 'react';

function PruebaProductos() {
  const [productos, setProductos] = useState(["Producto 1", "Producto 2", "Producto 2", "Producto 3"])

  return (
    <>
    <ul>
      {productos.map((producto, i)=>{
        return(
          <li key={i}>{producto}</li>
        )
      })}
    </ul>
    </>
  );
}

export default PruebaProductos;