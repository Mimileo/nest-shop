import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import { use, useEffect, useState } from "react";

const ProductPage = () => {
    const { id } = useParams();

    const { fetchProduct } = useProductStore();

    const product = fetchProduct(id);

    const [currentProduct, setCuurrentProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadProduct = async () => {
            try {
                const product = await fetchProduct(id);
                setCuurrentProduct(product);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id, fetchProduct]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>
            <p>${product.price.tofixed(2)}</p>

            <span>
                <p>${product.category}</p>
            </span>
        </div>
    )
}

export default ProductPage;