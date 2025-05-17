import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const { products, fetchProducts, loading, categories, fetchProductCategories } = useProductStore();
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        fetchProducts();
        fetchProductCategories();
    }, [fetchProducts, fetchProductCategories]);


    const filteredProducts = products.filter((product) => {
        if (selectedCategory === "all") {
            return true;
        }
        
        if(categories.includes(selectedCategory)) {
            return product.category === selectedCategory;
        }

        return false;
    });

    return (
         <div className="card text-emerald-600 font-bold">
            <h1 className="text-white text-2xl font-bold mb-4 flex justify-center">Explore</h1>

            <div className="options w-full mb-4">

                <div className="options w-full mb-4 flex justify-end">

                    <label className="flex flex-col text-white font-bold mb-2 w-1/4">
                        Select Category
                    <select 
                        className="mt-1 p-2 rounded border border-emerald-600 text-emerald-600 font-bold"
                        name="selectedCategory"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>                    
                </label>
                </div>
                
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                 <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {filteredProducts.map((product) => (
                       <ProductCard 
                            key={product.id} 
                            product={product} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HomePage;