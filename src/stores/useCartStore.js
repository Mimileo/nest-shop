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

const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
}


const currentCart = loadCart();
const currentTotal = calculateTotal(currentCart);

export const useCartStore =  create((set, get) => ({
    cart: currentCart,
    total: currentTotal,
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
        const total = calculateTotal(updatedCart);
        savedCart(updatedCart);
        set({cart: updatedCart, total: total});
        
    },

    removeFromCart: (productId) => {
        // Remove the product with the specified ID
        const updatedCart = get().cart.filter(item => item.id !== productId);

        const total = calculateTotal(updatedCart);
        savedCart(updatedCart);
        set({cart: updatedCart, total: total});
    },

    clearCart: () => {
        savedCart([]);
        set({cart: [], total: 0});
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

        const total = calculateTotal(updatedCart);
        savedCart(updatedCart);
        set({cart: updatedCart, total: total});
    },

    buyCart: () => {
        
        alert("Thank you for your purchase!");
        set({cart: [], total: 0});
    },

    toggleCart: () => set(state => ({
        isCartOpen: !state.isCartOpen
    })),

}));
