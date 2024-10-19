import { NavLink } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="nav_wrap">
      <ul className="nav_menu_container">
        <li className="menu_items">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="menu_items">
          <NavLink to="/employee">Employee</NavLink>
        </li>
      </ul>
    </nav>
  );
};
