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
      <div>
        <Outlet />
      </div>
      <SideBar items={[
        { label: 'Products', Icon: () => Tablet, link: 'products' },
        { label: 'Tools', Icon: () => Tool, link: 'tools' },
        { label: 'User', Icon: () => User, link: 'user' },
      ]} />



    </>

  )
}

export default Dashboard