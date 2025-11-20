import { NotificationWrapper, LineIconWrapper } from "./Notifications.styled";
import { FaCheck, FaTimes, FaExclamation } from "react-icons/fa";

const Notification = ({ message, type }) => {
  let color = "#2979ff";
  let Icon = FaExclamation;

  if (type === "success") { color = "#4da6ff"; Icon = FaCheck; }
  else if (type === "error") { color = "#b30000"; Icon = FaTimes; }

  return (
    <NotificationWrapper>
      <LineIconWrapper color={color}><Icon /></LineIconWrapper>
      <span>{message}</span>
    </NotificationWrapper>
  );
};

export default Notification;
