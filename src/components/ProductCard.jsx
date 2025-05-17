
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {


    const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		    alert("Product added to cart! " + product.name);
			addToCart(product);
	};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product.image} alt={product.description} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;