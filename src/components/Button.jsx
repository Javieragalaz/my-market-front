function Button ({ children, type = 'primary', handleClick = () => {} }) {
  const types = {
    primary: 'bg-emerald-500',
    error: 'bg-red-500',
    colorBar: 'bg-gray-800',
  
  }
  return (
    <button 
      onClick={handleClick}
      className={`shadow ${types[type]} h-9 w-20 rounded text-white m-10`}
    >
      {children}
    </button>
  )
}

export default Button