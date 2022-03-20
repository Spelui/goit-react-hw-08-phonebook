import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./HeaderStyle.scss";

export const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="/register"
      >
        {t("register")}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="/login"
      >
        {t("login")}
      </NavLink>
    </div>
  );
};
