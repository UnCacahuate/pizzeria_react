import { useState, useEffect } from "react";
import { formatearMoneda } from "../utilitarios/formatearMoneda";

export default function Pizza() {

  const [pizza, setPizza] = useState({});
  const [error, setError] = useState(null);

  useEffect(()=>{
    const consultarApi = async () => {
      try {
        const url = "http://localhost:5000/api/pizzas/p001"
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error ${response.status} al cargar la pizza`)
        }
        const data = await response.json()
        setPizza(data)
      } catch (err) {
        console.error(err)
        setError("No se pudo cargar la pizza. ¿Está levantado el backend?")
      }
    }
    consultarApi()
  },[]);

  if (error) {
    return <p className="text-danger text-center my-5">{error}</p>
  }

  if (!pizza.ingredients) {
    return <p>Cargando pizza...</p>
  }

  return (
    <>
      <div className="flex-fill d-flex justify-content-center align-items-center" style={{backgroundColor: "#e2e1e1"}}>
        <div className="container">
          <div className="card mb-3" style={{ maxWidth: '1500px' }}>
            <div className="row g-3">
              <div className="col-md-6">
                <img src={pizza.img} className="w-100 h-100 object-fit-cover rounded-start" alt={pizza.name} />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center p-4">
                <div className="card-body row gap-3 tamano1">
                  <h2 className="card-title text-capitalize" style={{ fontWeight: 'bold' }}>{pizza.name}</h2>
                  <p className="card-text text-capitalize">Ingredientes: {pizza.ingredients.join(', ')}</p>
                  <p className="card-text"><small className="text-body-secondary">{pizza.desc}</small></p>
                  <div className="d-flex justify-content-between">
                    <h2 className="card-text" style={{ fontWeight: 'bold' }}>${formatearMoneda(pizza.price)}</h2>
                    <button type="button" className="btn btn-primary">Agregar al carro</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
