import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import ProductCard from "../components/Product/ProductCard";
import Loader from "../components/Loader";
import SelectPicker from "../components/Pickers/SelectPicker";
import GridLayout from "../components/Layouts/GridLayout";
const ShopPage = () => {
  const {
    products,
    fetchProducts,
    loading,
    categories,
    fetchProductCategories,
  } = useProductStore();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchProductCategories();
  }, [fetchProducts, fetchProductCategories]);

  const selectCategories = [
    { value: "all", label: "All" },
    ...categories.map((category) => ({ value: category, label: category })),
  ];

  const sortOptions = [
    { value: "", label: "None" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ];

  const filteredProducts = () => {
    let filteredProducts = [...products];

    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === selectedCategory
      );
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
    <>
      <section className="bg-white px-10 pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="homepage">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-4">
              <span className="block text-2xl font-semibold text-emerald-800">
                Explore
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
            <SelectPicker
              label="Category"
              name="category"
              value={selectedCategory}
              options={selectCategories}
              onChange={setSelectedCategory}
            />

            <SelectPicker
              label="Sort"
              name="sort"
              value={sortOption}
              options={sortOptions}
              onChange={setSortOption}
            />
          </div>
        </div>

        <div className="">
          <div className="options">
            {loading && <Loader />}

            {!loading && (
              <>
                <GridLayout
                  cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  gap="gap-4"
                >
                  {filteredProducts().map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </GridLayout>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
