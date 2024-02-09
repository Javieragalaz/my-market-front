function Button ({ content, type = 'primary' }) {
  const types = {
    primary: 'bg-emerald-500',
    error: 'bg-red-500'
  }
  return (
    <button className={`shadow ${types[type]} h-9 w-20 rounded text-white`}>{content}</button>
  )
}

export default Button