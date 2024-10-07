
import useCartStore from '../store/cartStore'; // Import the store

const Product = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart); // Get the addToCart action

  return (
    <div style={styles.product}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to cart */}
    </div>
  );
};

const styles = {
  product: {
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

export default Product;
