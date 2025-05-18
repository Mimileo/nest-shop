
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {


    const { addToCart } = useCartStore();
   
	const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
		alert("Product added to cart! " + product.name);
		addToCart(product);
	};


    return (

        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

        <Link 
            className="block"
            to={`/products/${product.id}`}
        >
            <div className="w-full h-[200px]">
                <img 
                    className="object-cover w-full h-full"
                    src={product.image} 
                    alt={product.description} 
                />  
            </div>

            <div className="card-body p-4 flex flex-col h-full">
                <div className="card-details mb-5">
                     <h2 className="card-title text-lg font-semibold text-gray-800 mb-1">
                        {product.name}
                    </h2>
                     <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                     </p>
                </div>
               
              
                <div className="card-actions flex justify-between items-center mt-auto">
                    <span className="text-emerald-700 font-bold">${product.price.toFixed(2)}</span>
                    <button 
                        onClick={handleAddToCart}
                        className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>

        </div>
    )
}

export default ProductCard;