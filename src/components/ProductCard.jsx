
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

        <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">

        <Link 
            className="block relative group"
            to={`/products/${product.id}`}
        >
            <div className="relative">
                <img 
                    className="object-cover w-full h-60"
                    src={product.image} 
                    alt={product.description} 
                />  

                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900 opacity-25 group-hover:opacity-0 transition duration-300">

                </div>

                {/* Category Badge */}
                <div className="absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white rounded-full w-auto h-8 flex flex-col items-center justify-center mt-3 mr-3 text-sm hover:bg-white hover:text-indigo-600 transition duration-500">
                    <small>{product.category || "Category"}</small>
                </div>
            </div>

            {/* Card Body */}
            <div className="card-body px-6 py-4 bg-white z-30 relative">
                <div className="card-details mb-2">
                    <Link to={`/products/${product.id}`} className="block mb-1">
                        <h2 className="font-semibold text-lg hover:text-emerald-500 transition duration-500">{product.name}</h2>
                    </Link>
                    <p className="text-slate-500 text-sm line-clamp-2">{product.description}</p>
                </div>
               
              
                <div className="card-actions flex justify-between items-center">
                    <span className="text-gray-900 text-sm">
                        Price: 
                        <span className="text-slate-700 text-sm">${product.price.toFixed(2)}</span>
                    </span>
                    <button 
                        onClick={handleAddToCart}
                        className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 hover:text-white-800 hover:shadow transition duration-300 text-sm font-medium "
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