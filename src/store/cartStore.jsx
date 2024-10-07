import { create } from 'zustand';

// Zustand Store
const useCartStore = create((set) => ({
  cart: [], // Cart items will be stored in this array

  // Add item to cart
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, item] // Append new item to the cart array
  })),

  // Remove item from cart by ID
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== itemId) // Remove item by its ID
  })),

  // Clear all items from the cart
  clearCart: () => set({ cart: [] }), // Reset the cart to an empty array
}));

export default useCartStore;
