import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

export const Navigation = () => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
      >
        Welcome Page
      </NavLink>

      {isLogIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
