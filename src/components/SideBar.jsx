import { Link } from "react-router-dom"
import { Tablet, Tool, User } from "../assets/icons"
import MenuItem from "./MenuItem"

function SideBar({ items }) {
  return (
    <div className=" shadow-sm shadow-black h-screen bg-gray-800">
      {items.map((item, i) => {
        const Icon = item.Icon()
        return (
          <MenuItem key={`menu-${i}`}>
            <Link to={item.link} >
              <Icon />
              {item.label}
            </Link>
          </MenuItem>
        )
      })}
    </div>
  )
}

export default SideBar