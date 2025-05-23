
import { useCartStore } from "../../stores/useCartStore";
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

        <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white flex flex-col h-full">

        <Link 
            className="block group h-full"
            to={`/products/${product.id}`}
        >
            <div className="relative">
                <img 
                    className="object-cover w-full h-60 sm:h-56 md:h-48"
                    src={product.image} 
                    alt={product.description} 
                    loading="lazy"
                />  

                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900 opacity-25 group-hover:opacity-0 transition duration-300">

                </div>

                {/* Category Badge */}
                <div className="absolute top-0 right-0 bg-indigo-600 px-3 py-1 text-white text-xs rounded-full w-auto h-8 flex flex-col items-center justify-center mt-3 mr-3 text-sm hover:bg-white hover:text-indigo-600 transition duration-300">
                    {product.category || "Category"}
                </div>
            </div>

            {/* Card Body */}
            <div className="card-body px-4 py-3 flex flex-col justify-between flex-grow bg-white">
                <div className="card-details">
                    <Link to={`/products/${product.id}`} className="block mb-1">
                        <h2 className="font-semibold text-base md:text-lg mb-1 group-hover:text-emerald-500 transition duration-300">{product.name}</h2>
                    </Link>
                    <p className="text-slate-500 text-sm mb-8 line-clamp-2">{product.description}</p>
                </div>
               
              
                <div className="card-actions flex justify-between items-center gap-2 mt-auto">
                    <span className="text-emerald-600 text-sm font-bold">
                        Price: 
                        <span className="text-slate-700 text-sm font-semibold"> ${product.price.toFixed(2)}</span>
                    </span>
                    <button 
                        onClick={handleAddToCart}
                        className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-500 hover:text-white hover:shadow transition duration-300 text-sm "
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