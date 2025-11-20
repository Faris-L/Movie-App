import { createContext, useContext, useState } from "react";
import Notification from "../Components/Notifications/Notifications";

const NotificationContext = createContext();
export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = ({ message, type = "info", duration = 4000 }) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 9999,
        }}
      >
        {notifications.map((n) => (
          <Notification key={n.id} message={n.message} type={n.type} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
