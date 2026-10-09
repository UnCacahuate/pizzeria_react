import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {

  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const consultarApi = async () => {
      try {
        const url = "http://localhost:5000/api/pizzas"
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error ${response.status} al cargar las pizzas`)
        }
        const data = await response.json()
        setPizzas(data)
      } catch (err) {
        console.error(err)
        setError("No se pudieron cargar las pizzas. ¿Está levantado el backend?")
      }
    }
    consultarApi()
  },[]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Header />

      <div
        className="container my-5 d-flex flex-column justify-content-center"
        style={{ flex: 1 }}
      >
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="row g-4 justify-content-center">
            {pizzas.map((pizza)=>{
              return(
                <div className="col-12 col-md-4" key={pizza.id}>
                  <CardPizza 
                    name={pizza.name}
                    desc={pizza.desc}
                    img={pizza.img}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;