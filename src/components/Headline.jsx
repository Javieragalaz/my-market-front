function Headline ({ text, size = 'large' }) {
  const sizes = {
    large: 'text-lg',
    small: 'text-sm'
    
  }
  return (
    <div className={`${sizes[size]}`}>
      {text}
    </div>
  )
}

export default Headline;