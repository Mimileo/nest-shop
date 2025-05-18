import { Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
const CartCard = ( ) => {
    const { cart, total, removeFromCart, clearCart, updateQuantity  } = useCartStore();

    if (cart.length === 0) {
        return <p className="text-center">Your cart is empty.</p>;
    }

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };


    const handleClearCart = () => {
        clearCart();
    };

    const handleUpdateQuantity = (productId, quantity) => {
        updateQuantity(productId, quantity);
    };

    return (
        <div className="cart-container bg-white p-4 rounded shadow-md w-80 max-h-96 overflow-auto">
            <h2 className="cart-title text-xl font-semibold mb-4">Your Cart</h2>
            <div className="cart-items space-y-4">
                {cart.map(item => (
                    <div key={item.id} className="cart-item flex items-center gap-4">
                        <img 
                            src={item.image} 
                            alt={item.description}
                            className="w-16 h-16 object-cover rounded"
                        />
                        <div className="cart-item-details flex-1">
                            <h3  className="font-semibold">{item.name}</h3>
                            <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
                            <div className="text-sm flex items-center gap-2 mt-1">
                                  <p className="text-sm">Quantity: {item.quantity || 1}</p>

                                  <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>

                                  <span>{item.quantity || 1}</span>

                                  <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                            </div>
                          
                            <button 
                                className="text-red-500 text-sm mt-1"
                                onClick={() => handleRemoveFromCart(item.id)}
                            >
                               <Trash size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total mt-4 border-t pt-4 flex justify-between items-center font-bold text-lg">
                <p>Total: ${total.toFixed(2)}</p>
                <button 
                    className="g-red-500 text-white px-3 py-1 rounded"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    )

}

export default CartCard;