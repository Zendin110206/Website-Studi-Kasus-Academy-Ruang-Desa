// components/TextArea.js
const TextArea = ({ id, label, value, onChange, placeholder, helperText }) => (
    <div className="mb-6">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 sm:px-6 py-2 sm:py-4 rounded-2xl bg-white text-[#0C1E28] text-lg sm:text-2xl font-bold placeholder-gray-500 shadow-lg h-40 sm:h-64 focus:outline-none"
        required
        aria-required="true"
        aria-describedby={`${id}Help`}
      ></textarea>
      {helperText && (
        <p className="text-sm text-gray-600 mt-1" id={`${id}Help`}>
          {helperText}
        </p>
      )}
    </div>
  );
  
  export default TextArea;
  