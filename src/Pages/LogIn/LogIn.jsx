// src/Pages/Login/Login.jsx
import { useState } from "react";
import {
  LoginWrapper,
  LoginTitle,
  Input,
  LoginButton,
  FormLabel,
  CheckboxLabel,
  CheckboxInput,
} from "./login.styled";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!termsChecked) {
      setError("You must agree to the Terms of Service.");
      return;
    }

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    // Store user in localStorage
    const user = { username, email, dob };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to home or refresh header
    navigate("/");
  };

  return (
    <LoginWrapper>
      <LoginTitle>Login / Register</LoginTitle>

      <form onSubmit={handleLogin}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <FormLabel>Date of Birth</FormLabel>
        <Input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          />
          By logging in you agree to our{" "}
          <a
            href="https://www.example.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </CheckboxLabel>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <LoginButton type="submit">Log in</LoginButton>
      </form>
    </LoginWrapper>
  );
}
