import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { PrivateRoute } from "../UserMenu/PrivateRoute";
import { PublickRoute } from "../UserMenu/PublickRoute";
import AppBar from "../AppBar";
import { authOperations, authSelectors } from "../../redux/auth";

import ContactsView from "../../views/ContactsView";
import HomeView from "../../views/HomeView";
import RegisterView from "../../views/RegisterView";
import LoginView from "../../views/LoginView";

import "react-toastify/dist/ReactToastify.css";

// const ContactsView = lazy(() => import("../../views/ContactsView"));
// const HomeView = lazy(() => import("../../views/HomeView"));
// const RegisterView = lazy(() => import("../../views/RegisterView"));
// const LoginView = lazy(() => import("../../views/LoginView"));

const App = () => {
  const dispatch = useDispatch();
  const isFetchCurent = useSelector(authSelectors.getIsFetchCurent);

  useEffect(() => {
    dispatch(authOperations.fetchCurentUser());
  }, [dispatch]);

  return (
    !isFetchCurent && (
      <>
        <AppBar />
        <main>
          <Routes>
            <Route
              path="/goit-react-hw-08-phonebook"
              element={<Navigate to="/" />}
            />

            <Route
              path="/"
              element={
                <PublickRoute>
                  <HomeView />
                </PublickRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublickRoute restricted redirectTo="/">
                  <RegisterView />
                </PublickRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublickRoute restricted redirectTo="/contacts">
                  <LoginView />
                </PublickRoute>
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
          <ToastContainer />
        </main>
      </>
    )
  );
};

export default App;
