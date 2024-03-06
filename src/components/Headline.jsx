function Headline ({ children, size = 'large', color = 'primary' }) {
  const sizes = {
    large: 'text-lg font-bold',
    small: 'text-sm'
  }
  const colors = {
    primary :'text-emerald-500',
  }
  
  return (
    <div className={`${sizes[size]} ${colors[color]} mt-5`}>
      {children}
    </div>
  )
}

export default Headline;