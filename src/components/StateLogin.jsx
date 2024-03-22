// import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChnage,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChnage,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", () => hasMinLength(value, 6));



  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return;
    }
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
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChnage}
          error={emailHasError && "please enter a valid email"}
        />

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={enteredValue.password}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChnage}
          error={passwordHasError && "please enter a valid passowrd"}
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
