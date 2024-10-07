
import useCartStore from '../store/cartStore'; // Import the store

const Cart = () => {
  const cartItems = useCartStore((state) => state.cart); // Get cart items
  const removeFromCart = useCartStore((state) => state.removeFromCart); // Get the removeFromCart action
  const clearCart = useCartStore((state) => state.clearCart); // Get the clearCart action

  return (
    <div style={styles.cart}>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.cartItem}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

const styles = {
  cart: {
    border: '1px solid #000',
    padding: '20px',
    marginTop: '20px',
  },
  cartItem: {
    marginBottom: '10px',
  },
};

export default Cart;
