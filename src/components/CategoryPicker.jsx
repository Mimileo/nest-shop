const CategoryPicker = ({ selectedCategory, categories, onCategoryChange }) => {
    return (
            <div className="flex sm:flex-col sm:items-center justify-center gap-4 sm:gap-2 text-white font-bold mb-2 md:mb-0">

                <label aria-label="Select Category" className="mb-1 sm:mb-0">
                    Select Category
                </label>
                
                <select 
                    id="selectedCategory"
                    className="p-1 text-sm md:p-2 md:text-base rounded border bg-white border-emerald-600 text-emerald-600 font-bold"
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
            </div>
    )
}

export default CategoryPicker;