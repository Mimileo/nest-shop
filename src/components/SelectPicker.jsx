const SelectPicker = ({ label, value, options, onChange, name = "picker" }) => {
  return (
    <div className="flex sm:flex-col sm:items-center justify-center gap-4 sm:gap-2 text-white font-bold mb-2 md:mb-0">
      <label 
        htmlFor={name} 
        className="mb-1 sm:mb-0">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-1 text-sm md:p-2 md:text-base rounded border bg-white border-emerald-600 text-emerald-600 font-bold"
      >
        {options.map(choice => (
          <option key={choice.value} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPicker;
