import { useCartStore } from "../../stores/useCartStore";
import { Trash } from "lucide-react";
const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  return (
    <div className="cart-item flex items-center gap-4">
      <img
        src={item.image}
        alt={item.description}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="cart-item-details flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
        <div className="text-sm flex items-center gap-2 mt-1">
          <p className="text-sm">Quantity:</p>
          <button
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>

          <span>
            <input
              type="number"
              className="w-12 text-center border border-gray-300 rounded outline-none focus:border-slate-300"
              value={item.quantity}
              onChange={(e) =>
                handleUpdateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </span>

          <button
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
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
  );
};

export default CartItem;
