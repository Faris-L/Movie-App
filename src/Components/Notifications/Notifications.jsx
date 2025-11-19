import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { NotificationWrapper, NotificationsContainer, LineIconWrapper } from "./Notifications.styled";
import { FaCheck, FaTimes, FaExclamation } from "react-icons/fa";

let container;

const getContainer = () => {
  if (!container) {
    container = document.createElement("div");
    document.body.appendChild(container);
    createRoot(container).render(<NotificationsContainer id="notifications-root" />);
  }
  return document.getElementById("notifications-root");
};

export const showNotification = ({ message, type = "info", duration = 5000 }) => {
  const notification = document.createElement("div");
  getContainer().appendChild(notification);
  const root = createRoot(notification);

  const NotificationComponent = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    let color = "#2979ff";
    let Icon = FaExclamation;

    if (type === "success") {
      color = "#4da6ff";
      Icon = FaCheck;
    } else if (type === "error") {
      color = "#b30000";
      Icon = FaTimes;
    }

    return (
      <NotificationWrapper>
        <LineIconWrapper color={color}><Icon /></LineIconWrapper>
        <span>{message}</span>
      </NotificationWrapper>
    );
  };

  root.render(<NotificationComponent />);

  setTimeout(() => {
    root.unmount();
    notification.remove();
  }, duration + 300);
};
