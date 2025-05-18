import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import ProductCard from "../components/ProductCard";
import CategoryPicker from "../components/CategoryPicker";
import SortPicker from "../components/SortPicker";
import Loader from "../components/Loader";
const ShopPage = () => {
    const { products, fetchProducts, loading, categories, fetchProductCategories } = useProductStore();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const[sortOption, setSortOption] = useState("");

    useEffect(() => {
        fetchProducts();
        fetchProductCategories();
    }, [fetchProducts, fetchProductCategories]);


    const filteredProducts =() => {

        let filteredProducts = [...products];

        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
        }
       
        
        switch (sortOption) {
            case "price-asc":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case "name-asc":
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }

        return filteredProducts;
    };

    return (
         <div className="card text-emerald-600 font-bold">
            <h1 className="text-white text-2xl font-bold mb-4 flex justify-center">Explore</h1>

            <div className="options w-full mb-4 flex flex-col md:flex-row gap-4 justify-end">
                <CategoryPicker 
                    selectedCategory={selectedCategory}
                    categories={categories}
                    onCategoryChange={setSelectedCategory}
                />

                <SortPicker 
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                />
            </div>
            {loading ? (
                <Loader />
            ) : (
                 <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {filteredProducts().map((product) => (
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

export default ShopPage;