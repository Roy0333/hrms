import { NavLink } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/employee">Employee</NavLink>
        </li>
      </ul>
    </nav>
  );
};
