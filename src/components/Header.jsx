import fondoHeader from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <header className="text-center text-white p-5" style={{
        backgroundColor: 'black',
        backgroundImage: `url(${fondoHeader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <h1>¡Cacahuate's pizzeria!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;