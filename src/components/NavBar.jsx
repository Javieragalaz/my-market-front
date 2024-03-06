import { Link } from "react-router-dom"
function NavBar () {

    return (
        <div className="flex justify-around bg-gray-800 shadow-black shadow-sm"> 
         <div className="flex text-zinc-300 my-5 justify-center">
        <Link>Menu Item</Link>
      </div>
      <div className="flex text-zinc-300 my-5 justify-center">
        <Link>Menu Item</Link>
      </div>
      <div className="flex text-zinc-300 my-5 justify-center">
        <Link>Menu Item</Link>
      </div>
        </div>
   
    )
}

export default NavBar