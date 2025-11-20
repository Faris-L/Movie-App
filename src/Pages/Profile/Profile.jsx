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
import { useNotifications } from "../../Context/notificationContext";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

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
  const [passwords, setPasswords] = useState({
    confirmPassword: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => setTemp({ ...temp, [e.target.name]: e.target.value });
  const handlePasswordChange = (e) => setPasswords({ ...passwords, [e.target.name]: e.target.value });

  const openModal = (type) => {
    setModalType(type);
    setPasswords({
      confirmPassword: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setError("");
  };

  const handleSaveChanges = () => {
    if (passwords.confirmPassword !== user.password) {
      setError("Incorrect password!");
      return;
    }
    const updated = { ...user, ...temp };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
    setForm(temp);
    setIsEditing(false);
    setModalType(null);
    addNotification({ message: "Profile changes saved successfully!", type: "success" });
  };

  const handleLogout = () => {
    if (passwords.confirmPassword !== user.password) {
      setError("Incorrect password!");
      return;
    }
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");
    setUser(null);
    setModalType(null);
    navigate("/login");
    addNotification({ message: "Logged out & account deleted!", type: "error" });
  };

  const handleChangePassword = () => {
    if (passwords.oldPassword !== user.password) {
      setError("Old password is incorrect!");
      return;
    }
    if (!passwords.newPassword || passwords.newPassword !== passwords.confirmNewPassword) {
      setError("New passwords do not match or are empty!");
      return;
    }
    const updated = { ...user, password: passwords.newPassword };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
    setModalType(null);
    setPasswords({ oldPassword: "", newPassword: "", confirmNewPassword: "", confirmPassword: "" });
    addNotification({ message: "Password changed successfully!", type: "success" });
  };

  const handleCancel = () => {
    setModalType(null);
    addNotification({ message: "Operation cancelled!", type: "error" });
  };

  return (
    <ProfileWrapper>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <ProfileHeader>
          <Greeting>Hello, {form.username}</Greeting>

          {!isEditing ? (
            <OptionsRow>
              <OptionsButton onClick={() => setIsEditing(true)}>Edit</OptionsButton>
              <OptionsButton onClick={() => openModal("changePassword")}>Change Password</OptionsButton>
              <OptionsButton onClick={() => openModal("logout")}>Log Out & Delete Account</OptionsButton>
            </OptionsRow>
          ) : (
            <OptionsRow>
              <OptionsButton onClick={() => { setTemp(form); setIsEditing(false); handleCancel(); }}>
                Cancel Changes
              </OptionsButton>
              <OptionsButton onClick={() => openModal("save")}>Save Changes</OptionsButton>
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
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
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
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
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
                  name="oldPassword"
                  value={passwords.oldPassword}
                  onChange={handlePasswordChange}
                />
                <ModalInput
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                />
                <ModalInput
                  type="password"
                  placeholder="Confirm New Password"
                  name="confirmNewPassword"
                  value={passwords.confirmNewPassword}
                  onChange={handlePasswordChange}
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
