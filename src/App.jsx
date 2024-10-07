
import Product from './components/Product';
import Cart from './components/Cart';

// Dummy product data
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 },
];

function App() {
  return (
    <div style={styles.app}>
      <h1>Simple Cart Application</h1>
      <div style={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    padding: '20px',
  },
  products: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
};

export default App;
