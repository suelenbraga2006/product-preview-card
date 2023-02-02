import './App.scss';

import { BsCart3 } from 'react-icons/bs';
import bitmap from './assets/images/bitmap.png';

function App() {
  return (
    <div className="container">
      <div className="image">
        <img src={bitmap} alt="Gabrielle Essence Eau De Parfum" />
      </div>
      <div className="info">
        <small>PERFUME</small>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <p>
            $149.99
            <span>$169.99</span>
          </p>
        </div>
        <a href="/home">
          <BsCart3 size={15} />
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default App;
