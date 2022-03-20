import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";

import { PrivateRoute } from "../UserMenu/PrivateRoute";
import { PublicRoute } from "../UserMenu/PublicRoute";
import AppBar from "../AppBar";
import { authOperations, authSelectors } from "../../redux/auth";
import Loader from "../../common/Loader/Loader";

import "react-toastify/dist/ReactToastify.css";

const ContactsView = lazy(() =>
  import("../../views/ContactsView" /* webpackChunkName: "Contacts___page" */)
);
const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "Home___page" */)
);
const RegisterView = lazy(() =>
  import("../../views/RegisterView" /* webpackChunkName: "Register___page" */)
);
const LoginView = lazy(() =>
  import("../../views/LoginView" /* webpackChunkName: "Login___page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchCurrent = useSelector(authSelectors.getIsFetchCurent);

  useEffect(() => {
    dispatch(authOperations.fetchCurentUser());
  }, [dispatch]);

  return (
    !isFetchCurrent && (
      <>
        <AppBar />
        <main>
          <div>
            <Suspense fallback={<Loader />}>
              <LanguageSwitcher />
            </Suspense>
          </div>

          <Suspense fallback={"Loading page...."}>
            <Routes>
              <Route
                path="/goit-react-hw-08-phonebook"
                element={<Navigate to="/" />}
              />

              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute restricted redirectTo="/">
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
          <ToastContainer />
        </main>
      </>
    )
  );
};

export default App;
