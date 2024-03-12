import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import { Link, Outlet } from "react-router-dom"
import { Tablet, Tool, User } from '../assets/icons'


function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-800 text-white flex justify-end px-6 py-2 shadow-black shadow-sm">
        <Link>Dashboard</Link>
        <div>/</div>
        <Link>Profile</Link>
      </div>
      <div className="grid grid-cols-[200px_minmax(100px,_1fr)_800px]"> 
   
      <SideBar items={[
        { label: 'User', Icon: () => User, link: 'user' },
        { label: 'Products', Icon: () => Tablet, link: 'products' },
        { label: 'Tools', Icon: () => Tool, link: 'tools' },
        
      ]} />
       <Outlet>
       </Outlet>
          </div>



    </>

  )
}

export default Dashboard