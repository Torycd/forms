import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
 
  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && !enteredValue.password.trim().length < 6;

  function handleInputBlur(identifier, value) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          value={enteredValue.email}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          error={emailIsInvalid && 'please enter a valid email'}
        />

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={enteredValue.password}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          error={passwordIsInvalid && 'please enter a valid passowrd'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" disabled={emailIsInvalid}>
          Login
        </button>
      </p>
    </form>
  );
}
