import { NavLink } from "react-router-dom";

import "./HeaderStyle.scss";

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="/register"
      >
        Register
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};
