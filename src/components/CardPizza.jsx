import { formatearMoneda } from '../utilitarios/formatearMoneda';

const CardPizza = ({ name, price, desc, ingredients, img }) => {
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
        <button className="btn btn-dark btn-sm">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;