const TextAreaField = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  rows = 6,
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

      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full resize-y rounded-xl border border-brand-border bg-white px-4 py-3.5 text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
};

export default TextAreaField;
