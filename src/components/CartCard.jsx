import { Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import CartItem from "./CartItem";
const CartCard = ( ) => {
    const { cart, total, clearCart  } = useCartStore();

    if (cart.length === 0) {
        return <p className="text-center">Your cart is empty.</p>;
    }



    const handleClearCart = () => {

      let clearCartPrompt = confirm("Are you sure you want to clear your cart?");

      if(clearCartPrompt) {
        clearCart();
      }
    };

    return (
        <div className="cart-container bg-white p-4 rounded shadow-md w-80 max-h-96 overflow-auto">
            <h2 className="cart-title text-xl font-semibold mb-4">Your Cart</h2>
            <div className="cart-items space-y-4">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="cart-total mt-4 border-t pt-4 flex justify-between items-center font-bold text-lg">
                <p>Total: ${total.toFixed(2)}</p>
                <button 
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    )

}

export default CartCard;