import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { formatearMoneda } from "../utilitarios/formatearMoneda"

export default function DetailView() {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(()=>{
    const getProduct = async ()=>{
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    getProduct()
  },[id])

  return (
    <div className="flex-fill d-flex justify-content-center align-items-center py-4" style={{backgroundColor: "#e2e1e1"}}>
      <div className="container">
        {product != null ?
          <div className="card border-0 shadow overflow-hidden mx-auto" style={{ maxWidth: '1500px' }}>
            <div className="row g-3">
              <div className="col-md-6">
                <img src={product.img} className="w-100 h-100 object-fit-cover" alt={product.name} />
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center p-4">
                <div className="card-body row gap-3 tamano1">
                  <h2 className="card-title text-capitalize" style={{ fontWeight: 'bold' }}>{product.name}</h2>
                  <p className="card-text text-capitalize">Ingredientes: {product.ingredients.join(', ')}</p>
                  <p className="card-text"><small className="text-body-secondary">{product.desc}</small></p>
                  <div className="d-flex justify-content-between">
                    <h2 className="card-text" style={{ fontWeight: 'bold' }}>${formatearMoneda(product.price)}</h2>
                    <button type="button" className="btn btn-primary">Agregar al carro</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        :
          <div className="card border-0 shadow mx-auto text-center p-5" style={{ maxWidth: '400px' }}>
            <div className="spinner-border mx-auto mb-3" role="status"></div>
            <h5 className="mb-0">Cargando producto...</h5>
          </div>
        }
      </div>
    </div>
  )
}
