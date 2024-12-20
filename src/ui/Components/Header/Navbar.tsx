import {NavLink} from "react-router";
import './Navbar.css'

export const Navbar = () => {
    return (
       <nav className={"navbar"}>
           <NavLink
               to="/profile"
               className={({ isActive }) =>
                   isActive ? "active" : ""
               }
           >
               Profile
           </NavLink>
           {/* dashboard */}
           <NavLink
               to="/"
               className={({ isActive }) =>
                   isActive ? "active" : ""
               }
           >
               Dashboard
           </NavLink>
           {/* expenses */}
           <NavLink
               to="/expenses"
               className={({ isActive }) =>
                   isActive ? "active" : ""
               }
           >
               Expenses
           </NavLink>
           {/* income */}
           <NavLink
               to="/income"
               className={({ isActive }) =>
                   isActive ? "active" : ""
               }
           >
               Income
           </NavLink>
           {/* Settings */}
           <NavLink
               to="/settings"
               className={({ isActive }) =>
                   isActive ? "active" : ""
               }
           >
               Settings
           </NavLink>
       </nav>
    )
}