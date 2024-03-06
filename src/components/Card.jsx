function Card({ children }) {
  return (
    <div className="flex flex-col mx-56 shadow text-center items-center bg-white mt-10"> 
      {children} 
    </div>
  )
}

export default Card