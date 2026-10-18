import { formatearMoneda } from '../utilitarios/formatearMoneda';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const CardPizza = ({ id, name, price, desc, ingredients, img}) => {
  
  const { anadirPizza } = useContext(CartContext)

  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <ul className="card-text text-muted">
          {ingredients.map((ing, index)=>{
            return(
              <li key={index}>
                {ing}
              </li>
            )
          })}
          {/* Ingredientes: {ingredients.join(', ')} */}
        </ul>
        <p className="card-text text-muted">
          {desc}
        </p>
        <p className="fw-bold">Precio: ${formatearMoneda(price)}</p>
        <button className="btn btn-outline-secondary btn-sm me-2">Ver Más</button>
        <button className="btn btn-dark btn-sm" onClick={()=>{
            anadirPizza({ id, name, price, img, desc })
          }}>Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;