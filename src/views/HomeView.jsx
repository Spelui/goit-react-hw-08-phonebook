import React from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

const titleStyle = {
  fontSize: "28px",
  marginTop: "80px",
  textAlign: "center",
  color: "#ffffff",
};

const HomeView = () => {
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className="container">
      <h1 style={titleStyle}>Welcome to Our Phone Book App {name}</h1>
    </div>
  );
};

export default HomeView;
