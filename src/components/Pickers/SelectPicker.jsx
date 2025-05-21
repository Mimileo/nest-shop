const SelectPicker = ({ label, value, options, onChange, name = "picker" }) => {
  return (
    <div className="flex flex-col w-full max-w-xs text-white font-bold mb-2 mx-auto sm:mx-0">
      <label htmlFor={name} className="mb-1 text-sm md:text-base">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded border bg-white border-emerald-600 text-emerald-600 font-bold"
      >
        {options.map((choice) => (
          <option key={choice.value} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPicker;
