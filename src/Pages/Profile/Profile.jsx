import { useState } from "react";
import {
  ProfileWrapper,
  ProfileHeader,
  Greeting,
  OptionsRow,
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
import { NavLink, useNavigate } from "react-router-dom";
import { showNotification } from "../../Components/Notifications/Notifications";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  if (!user)
    return (
      <ProfileWrapper>
        What are you doing here? You haven't logged in yet, stowaway. Go Log in!{" "}
        <NavLink to={"/login"}>Log In Page</NavLink>
      </ProfileWrapper>
    );

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    username: user.username,
    email: user.email,
    dob: user.dob || "",
  });
  const [temp, setTemp] = useState(form);
  const [modalType, setModalType] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChange = (e) => setTemp({ ...temp, [e.target.name]: e.target.value });

  const openSaveModal = () => { setModalType("save"); setConfirmPassword(""); setError(""); };
  const openLogoutModal = () => { setModalType("logout"); setConfirmPassword(""); setError(""); };
  const openChangePasswordModal = () => { setModalType("changePassword"); setOldPassword(""); setNewPassword(""); setConfirmNewPassword(""); setError(""); };

  const handleSaveChanges = () => {
    if (confirmPassword !== user.password) { setError("Incorrect password!"); return; }
    setForm(temp);
    const updated = { ...user, ...temp };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
    setIsEditing(false);
    setModalType(null);
    showNotification({ message: "Profile changes saved successfully!", color: "#4da6ff", type: "success" });
  };

  const handleLogout = () => {
    if (confirmPassword !== user.password) { setError("Incorrect password!"); return; }
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");
    setUser(null);
    setModalType(null);
    navigate("/login");
    showNotification({ message: "Logged out & account deleted!", color: "#b30000", type: "error" });
  };

  const handleChangePassword = () => {
    if (oldPassword !== user.password) { setError("Old password is incorrect!"); return; }
    if (!newPassword || newPassword !== confirmNewPassword) { setError("New passwords do not match or are empty!"); return; }
    const updated = { ...user, password: newPassword };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
    setModalType(null);
    setOldPassword(""); setNewPassword(""); setConfirmNewPassword("");
    showNotification({ message: "Password changed successfully!", color: "#003366", type: "success" });
  };

  const handleCancel = () => {
    setModalType(null);
    showNotification({ message: "Operation Cancelled!", color: "#ff6666", type: "error" });
  };

  return (
    <ProfileWrapper>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <ProfileHeader>
          <Greeting>Hello, {form.username}</Greeting>

          {!isEditing && (
            <OptionsRow>
              <OptionsButton onClick={() => setIsEditing(true)}>Edit</OptionsButton>
              <OptionsButton onClick={openChangePasswordModal}>Change Password</OptionsButton>
              <OptionsButton onClick={openLogoutModal}>Log Out & Delete Account</OptionsButton>
            </OptionsRow>
          )}

          {isEditing && (
            <OptionsRow>
              <OptionsButton onClick={() => { setTemp(form); setIsEditing(false); handleCancel(); }}>
                Cancel Changes
              </OptionsButton>
              <OptionsButton onClick={openSaveModal}>Save Changes</OptionsButton>
            </OptionsRow>
          )}

          {isEditing && (
            <>
              <FieldLabel>Username</FieldLabel>
              <FieldInput name="username" value={temp.username} onChange={handleChange} />
              <FieldLabel>Email</FieldLabel>
              <FieldInput name="email" value={temp.email} onChange={handleChange} />
              <FieldLabel>Date of Birth</FieldLabel>
              <FieldInput type="date" name="dob" value={temp.dob} onChange={handleChange} />
            </>
          )}
        </ProfileHeader>

        <NewsSection>
          <NewsTitle>News</NewsTitle>
        </NewsSection>
      </div>

      {modalType && (
        <ModalOverlay>
          <ModalContent
            style={{
              background:
                modalType === "changePassword"
                  ? "rgba(30, 61, 123, 0.9)"
                  : modalType === "logout"
                  ? "rgba(0, 0, 0, 0.85)"
                  : "rgba(0, 0, 0, 0.85)",
            }}
          >
            <ModalTitle>
              {modalType === "save"
                ? "Confirm password to save profile changes."
                : modalType === "logout"
                ? "Are you sure you want to log out? This will delete your account and favorites."
                : "Change your password"}
            </ModalTitle>

            {modalType === "save" && (
              <>
                <ModalInput
                  type="password"
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div style={{ marginTop: 10 }}>
                  <ModalButton onClick={handleSaveChanges}>Confirm</ModalButton>
                  <ModalButton onClick={handleCancel}>Cancel</ModalButton>
                </div>
              </>
            )}

            {modalType === "logout" && (
              <>
                <ModalInput
                  type="password"
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div style={{ marginTop: 10 }}>
                  <ModalButton onClick={handleLogout}>Confirm</ModalButton>
                  <ModalButton onClick={handleCancel}>Cancel</ModalButton>
                </div>
              </>
            )}

            {modalType === "changePassword" && (
              <>
                <ModalInput
                  type="password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <ModalInput
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <ModalInput
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div style={{ marginTop: 10 }}>
                  <ModalButton onClick={handleChangePassword}>Confirm</ModalButton>
                  <ModalButton onClick={handleCancel}>Cancel</ModalButton>
                </div>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
