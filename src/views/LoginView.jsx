import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const titleStyle = {
  fontSize: "28px",
  marginTop: "30px",
  marginBottom: "30px",
  textAlign: "center",
  color: "#ffffff",
};

const formStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  fontSize: "22px",
  color: "#ffffff",
};

const inputStyle = {
  margin: "15px 0",
  padding: "5px 10px",
  fontSize: "16px",
  boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset",
  borderRadius: "4px",
  borderColor: "transparent",
  outline: "none",
};

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.loginIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h2 style={titleStyle}>Please write your Login and password</h2>

      <form onSubmit={onSubmit} style={formStyle}>
        <label style={labelStyle}>
          Youre Email
          <input
            style={inputStyle}
            type="email"
            name="email"
            onChange={onHandleChange}
            value={email}
          />
        </label>
        <label style={labelStyle}>
          Youre password
          <input
            style={inputStyle}
            type="password"
            name="password"
            onChange={onHandleChange}
            value={password}
          />
        </label>
        <button className="btn">Login IN</button>
      </form>
    </div>
  );
};

export default LoginView;
