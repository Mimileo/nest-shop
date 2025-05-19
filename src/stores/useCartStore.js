import { create } from "zustand";

const loadCart = () => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error loading cart:', error);
    return [];
  }
}

const savedCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export const useCartStore =  create((set, get) => ({
    cart: loadCart(),
    total: 0,
    isCartOpen: false, 

    addToCart: (product) => {
        const cart = [...get().cart];
        const existingProduct = cart.find(item => item.id === product.id);

        let updatedCart;
        if (existingProduct) {
           updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1};
                } else {
                    return item;
                };
            });
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }
       
        set({cart: updatedCart});
        savedCart(updatedCart);
        get().calculateTotal();
    },

    removeFromCart: (productId) => {
        // Remove the product with the specified ID
        const updatedCart = get().cart.filter(item => item.id !== productId);
        savedCart(updatedCart);
        set({cart: updatedCart});
        get().calculateTotal();
    },

    clearCart: () => {
        savedCart([]);
        set({cart: [], total: 0});
    },


    calculateTotal: () => {
        const cart = get().cart;

        // calculate total of each product and quantity and add to running total
        const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
        set({total});
    },

    updateQuantity: (productId, quantity) => {

        if (quantity === 0) {
            get().removeFromCart(productId);
            return;
        }

        // Update the quantity of the product
       const updatedCart = get().cart.map((item) =>
          // if the product id matches, update the quantity otherwise return the same item
            item.id === productId ? { ...item, quantity } : item
        );

        savedCart(updatedCart);
        set({cart: updatedCart});
        get().calculateTotal();
    },

    buyCart: () => {
        
        alert("Thank you for your purchase!");
        savedCart([]);
        set({cart: [], total: 0});
    },

    toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),

}));
