import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import "../HeaderStyle.scss";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [dropDawn, setDropDawn] = useState(false);

  const toggleDropDawn = () => setDropDawn(!dropDawn);

  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className="header__user">
      <button className="header__dropbox" onClick={toggleDropDawn}>
        Welcome {userName} <span className="arrow down"></span>
      </button>
      {dropDawn && (
        <div className="dropdown-content">
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(authOperations.loginOut())}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
