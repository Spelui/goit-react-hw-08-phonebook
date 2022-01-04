import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import "../HeaderStyle.scss";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className="header__user">
      <p className="header__text">Welcom {userName}</p>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(authOperations.loginOut())}
      >
        Log Out
      </button>
    </div>
  );
};
