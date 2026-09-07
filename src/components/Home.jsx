import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Header />

      <div
        className="container my-5 d-flex flex-column justify-content-center"
        style={{ flex: 1 }}
      >
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=80&w=800&auto=format&fit=crop"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?fm=jpg&q=80&w=800&auto=format&fit=crop"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://images.unsplash.com/photo-1573821663912-6df460f9c684?fm=jpg&q=80&w=800&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;