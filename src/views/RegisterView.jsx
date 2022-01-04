import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const titleStyle = {
  fontSize: "28px",
  marginTop: "30px",
  marginBottom: "30px",
  textAlign: "center",
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
};

const inputStyle = {
  margin: "15px 0",
  padding: "5px 10px",
  fontSize: "16px",
  boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset",
};

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h2 style={titleStyle}>Register</h2>
      <form onSubmit={onSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name
          <input
            style={inputStyle}
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </label>

        <label style={labelStyle}>
          Email
          <input
            style={inputStyle}
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
        </label>

        <label style={labelStyle}>
          Password
          <input
            style={inputStyle}
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </label>

        <button className="btn" type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}
