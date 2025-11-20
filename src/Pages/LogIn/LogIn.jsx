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
import { useNotifications } from "../../Context/notificationContext";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    termsChecked: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckbox = (e) =>
    setForm({ ...form, termsChecked: e.target.checked });

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.termsChecked) {
      setError("You must agree to the Terms of Service.");
      return;
    }

    if (!form.username || !form.password) {
      setError("Username and password are required.");
      return;
    }

    const user = {
      username: form.username,
      email: form.email,
      dob: form.dob,
      password: form.password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);

    addNotification({
      message: `Welcome to Blueflix, ${user.username}!`,
      type: "success",
    });

    navigate("/profile");
  };

  return (
    <LoginWrapper>
      <LoginTitle>Login / Register</LoginTitle>

      <form onSubmit={handleLogin}>
        <FormLabel>*Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <FormLabel>*Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <FormLabel>*Confirm Password</FormLabel>
        <Input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <FormLabel>Date of Birth</FormLabel>
        <Input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />

        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={form.termsChecked}
            onChange={handleCheckbox}
          />
          *By logging in you agree to our{" "}
          <a
            href="https://www.example.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
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
