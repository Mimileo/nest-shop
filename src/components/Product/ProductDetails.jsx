import { useCartStore } from "../../stores/useCartStore";

const ProductDetail = ({ product }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    alert(`Added "${product.name}" to cart!`);
    addToCart(product);
  };

  if (!product) {
    return <p>No product data available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md text-gray-900">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 md:w-1/2">
          <img 
            src={product.image} 
            alt={product.description} 
            className="w-full rounded"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-2">${product.price}</p>
            <p className="italic text-gray-600 mb-6">Category: {product.category}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="self-start bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
