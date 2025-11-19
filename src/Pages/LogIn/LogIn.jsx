import { useState } from "react";
import {
  LoginWrapper,
  LoginTitle,
  Input,
  LoginButton,
  FormLabel,
  CheckboxLabel,
  CheckboxInput,
} from "./LogIn.styled";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../../Components/Notifications/Notifications";

const Login = ({ setUser }) => {
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

    const user = { username, email, dob, password };
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
     


showNotification({
  title: "Logged in!",
  message: `Welcome to Blueflix, ${user.username}!`,
  color: "green",
});

navigate("/profile");
  };

  return (
    <LoginWrapper>
      <LoginTitle>Login / Register</LoginTitle>

      <form onSubmit={handleLogin}>
        <FormLabel>Username*</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <FormLabel>Password*</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <FormLabel>Confirm Password*</FormLabel>
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <FormLabel>Date of Birth</FormLabel>
        <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          />
          By logging in you agree to our{" "}
          <a href="https://www.example.com/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </CheckboxLabel>
        <h6>* checks are required</h6>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <LoginButton type="submit">Log in</LoginButton>
      </form>
    </LoginWrapper>
  );
};

export default Login;
