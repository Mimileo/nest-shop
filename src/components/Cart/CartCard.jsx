import { useCartStore } from "../../stores/useCartStore";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
const CartCard = () => {
  const { cart, total, clearCart, buyCart } = useCartStore();

   const navigate = useNavigate();

  const handleClearCart = () => {
    let clearCartPrompt = confirm("Are you sure you want to clear your cart?");

    if (clearCartPrompt) {
      clearCart();
    }
  };

  const handleBuyCart = () => {
    let buyCartPrompt = confirm("Ready to checkout?");

    if (buyCartPrompt) {
      buyCart();
    }
  };

  const handleRecommendClick = () => {
    const randomProductId = Math.floor(Math.random() * 4) + 1;
    navigate(`/products/${randomProductId}`);
  };

  return (
    <>
      <div className="cart-container bg-white p-5 rounded-2xl shadow-lg w-[90vw] sm:w-[50vw] max-w-sm max-h-[90vh]">
        <h2 className="cart-title text-2xl font-bold mb-4 text-emerald-500">
          Your Cart
        </h2>

        {cart.length !== 0 ? (
          <>
            {/* Cart Items */}
            <div className="cart-items space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-total mt-6 border-t pt-4 flex justify-between items-center font-semibold text-lg">
              <p>Total: ${total.toFixed(2)}</p>
            </div>
            <div className="cart-total mt-6 border-t pt-4 gap-4 mx-1 flex font-semibold text-lg">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4  py-2 rounded flex items-center gap-2"
                onClick={handleBuyCart}
              >
                Buy
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4  py-2 rounded flex items-center gap-2"
                onClick={handleClearCart}
              >
                Clear
              </button>
            </div>
          </>
        ) : (
          <div className="p-4 mb-4 text-gray-700 bg-gray-50 rounded-md border border-gray-200">
            <p className="mb-2 text-lg font-medium">Your cart is empty.</p>
            <p className="text-sm">
             
              <button
                onClick={handleRecommendClick}
                className="font-extrabold text-indigo-600 hover:text-indigo-500 transition duration-300"
              >
                Check out a recommended product!
              </button>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartCard;
