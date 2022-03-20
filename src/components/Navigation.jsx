import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

export const Navigation = () => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  const { t } = useTranslation();

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
      >
        {t("welcome")}
      </NavLink>

      {isLogIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          {t("contacts")}
        </NavLink>
      )}
    </nav>
  );
};
