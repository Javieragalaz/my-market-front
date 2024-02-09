function Input ({ placeholder = 'Email', type = 'text', name, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} />
    </>
  )
}

export default Input;