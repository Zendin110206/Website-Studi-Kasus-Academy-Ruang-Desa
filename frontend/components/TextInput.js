// components/TextInput.js
const TextInput = ({ id, label, value, onChange, placeholder, helperText }) => (
    <div className="mb-6">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg focus:outline-none"
        required
        aria-required="true"
        aria-describedby={`${id}Help`}
      />
      {helperText && (
        <p className="text-sm text-gray-600 mt-1" id={`${id}Help`}>
          {helperText}
        </p>
      )}
    </div>
  );
  
  export default TextInput;
  