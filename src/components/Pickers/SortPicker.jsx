
const SortPicker = ({ sortOption, onSortChange }) => {
    return (
        <div className="flex sm:flex-col sm:items-center justify-center gap-4 sm:gap-2 text-white font-bold mb-2 md:mb-0">
            Sort By
            <select 
                className="mt-1 p-2 rounded border bg-white border-emerald-600 text-emerald-600 font-bold hover:"
                value={sortOption}
                name="sortOption"
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="">None</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
            </select>
        </div>
    );
};

export default SortPicker;
