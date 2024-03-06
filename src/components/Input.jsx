function Input ({ 
  placeholder = 'Email',
  type = 'text',
  name,
  label,
  value,
  error,
  handleChange = () => {} 
}) {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={handleChange}
        className="m-10"
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <div>
        {error && (
          <span className="text-red-500">
            {error}
          </span>
        )}
      </div>
    </>
  )
}

export default Input;
