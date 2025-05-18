import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
    if (!products.length) {
        return <p className="text-white text-center">No products found.</p>;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    );
};

export default ProductGrid;
