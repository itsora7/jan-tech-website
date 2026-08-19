const FormField = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  autoComplete,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-brand-navy"
      >
        {label}

        {required && (
          <span className="ml-1 text-brand-red" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
};

export default FormField;
