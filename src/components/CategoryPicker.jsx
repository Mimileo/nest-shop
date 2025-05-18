const CategoryPicker = ({ selectedCategory, categories, onCategoryChange }) => {
    return (
            <label className="flex flex-col text-white font-bold mb-2 md:mb-0 md:w-48">
                Select Category
                <select 
                    className="mt-1 p-2 rounded border border-emerald-600 text-emerald-600 font-bold"
                    name="selectedCategory"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="all">All</option>

                    {categories.map((category) => (
                    <option 
                        key={category} 
                        value={category}>
                        {category}
                    </option>
                    ))}
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>                    
            </label>
    )
}

export default CategoryPicker;