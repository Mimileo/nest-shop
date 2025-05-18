import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import { useEffect, useState } from "react";
import { Product } from "../utils/types/Product";
import ProductDetail from "../components/ProductDetails";

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {string} description
 * @property {string} category
 */

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 

    const { fetchProduct } = useProductStore();

     /** @type {Product | null} */
    const [currentProduct, setCurrentProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage,setErrorMessage] = useState("");


    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            setErrorMessage('');

            try {
                const product = await fetchProduct(id);

                if (product) {
                    setCurrentProduct(product);
                } else {
                    setErrorMessage('Product not found');
                }
                
               
            } catch (error) {
                console.error('Error fetching product:', error);
                setErrorMessage('Failed to fetch product');
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id, fetchProduct]);



    if (!currentProduct) {
        return <p>Product not found</p>;
    }

    return (
        <div className="product-page">
           <button
            className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700"
            onClick={() => navigate(-1)}
            >
                Back
            </button>
           <ProductDetail 
            product={currentProduct} 
           />
        </div>
    )
}

export default ProductPage;