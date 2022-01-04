import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { Navigation } from "./Navigation";

import "./HeaderStyle.scss";

const AppBar = () => {
  const isLogginIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="header">
      <div className="container">
        <div className="header__bar">
          <Navigation />
          {isLogginIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
