import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import "../HeaderStyle.scss";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [dropDawn, setDropDawn] = useState(false);

  const toggleDropDawn = () => setDropDawn(!dropDawn);

  const userName = useSelector(authSelectors.getUserName);

  const { t } = useTranslation();

  return (
    <div className="header__user">
      <button className="header__dropbox" onClick={toggleDropDawn}>
        {t("welcome")} {userName} <span className="arrow down"></span>
      </button>
      {dropDawn && (
        <div className="dropdown-content">
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(authOperations.loginOut())}
          >
            {t("log-out")}
          </button>
        </div>
      )}
    </div>
  );
};
