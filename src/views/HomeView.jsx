import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { authSelectors } from "../redux/auth";

const titleStyle = {
  fontSize: "28px",
  marginTop: "80px",
  textAlign: "center",
  color: "#ffffff",
};

const HomeView = () => {
  const name = useSelector(authSelectors.getUserName);
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 style={titleStyle}>
        {t("home")} {name}
      </h1>
    </div>
  );
};

export default HomeView;
