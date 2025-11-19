import { useState } from "react";
import {
  ProfileWrapper,
  ProfileHeader,
  Greeting,
  OptionsButton,
  FieldLabel,
  FieldInput,
  NewsSection,
  NewsTitle,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalInput,
  ModalButton,
} from "./Profile.styled";

export default function Profile({ user, setUser }) {
  if (!user) return <ProfileWrapper>Please log in first.</ProfileWrapper>;

  const [editValues, setEditValues] = useState({
    username: user.username,
    password: user.password,
    dob: user.dob || "",
  });

  const [tempValues, setTempValues] = useState(editValues);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [logoutPassword, setLogoutPassword] = useState("");
  const [logoutError, setLogoutError] = useState("");

  const handleChange = (e) => {
    setTempValues({ ...tempValues, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    setEditValues(tempValues);
    setUser({ ...user, ...tempValues });
    localStorage.setItem("user", JSON.stringify({ ...user, ...tempValues }));
  };

  const handleCancel = () => {
    setTempValues(editValues);
  };

  const handleLogout = () => {
    if (logoutPassword !== editValues.password) {
      setLogoutError("Incorrect password!");
      return;
    }
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <ProfileWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProfileHeader>
          <Greeting>Hello, {editValues.username}</Greeting>

          <FieldLabel>Username</FieldLabel>
          <FieldInput
            name="username"
            value={tempValues.username}
            onChange={handleChange}
          />

          <FieldLabel>Password</FieldLabel>
          <FieldInput
            type="password"
            name="password"
            value={tempValues.password}
            onChange={handleChange}
          />

          <FieldLabel>Date of Birth</FieldLabel>
          <FieldInput
            type="date"
            name="dob"
            value={tempValues.dob}
            onChange={handleChange}
          />

          <div style={{ marginTop: 10 }}>
            <OptionsButton onClick={handleSaveChanges}>Save Changes</OptionsButton>
            <OptionsButton onClick={handleCancel}>Cancel</OptionsButton>
            <OptionsButton onClick={() => setShowLogoutModal(true)}>Logout</OptionsButton>
          </div>
        </ProfileHeader>

        <NewsSection>
          <NewsTitle>News</NewsTitle>
        </NewsSection>
      </div>

      {showLogoutModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              Are you sure you want to log out? This will clear your favorites and delete your account by our Terms of Service.
            </ModalTitle>
            <ModalInput
              type="password"
              placeholder="Enter password to confirm"
              value={logoutPassword}
              onChange={(e) => setLogoutPassword(e.target.value)}
            />
            {logoutError && <p style={{ color: "red" }}>{logoutError}</p>}
            <div style={{ marginTop: 10 }}>
              <ModalButton onClick={handleLogout}>Confirm Logout</ModalButton>
              <ModalButton onClick={() => setShowLogoutModal(false)}>Cancel</ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProfileWrapper>
  );
}
