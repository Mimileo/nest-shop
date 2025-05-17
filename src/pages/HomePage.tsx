import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import ProductCard from "../components/ProductCard";
import CatgoryPicker from "../components/CategoryPicker";

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
                <CatgoryPicker 
                    selectedCategory={selectedCategory}
                    categories={categories}
                    onCategoryChange={setSelectedCategory}
                />
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