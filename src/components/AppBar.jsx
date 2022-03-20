import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { Navigation } from "./Navigation";
import { Suspense } from "react";

import Loader from "../common/Loader/Loader";
import "./HeaderStyle.scss";

const AppBar = () => {
  const isLogginIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="header">
      <div className="container">
        <div className="header__bar">
          <Suspense fallback={<Loader />}>
            <Navigation />

            {isLogginIn ? <UserMenu /> : <AuthNav />}
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
