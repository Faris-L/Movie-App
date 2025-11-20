import { createRoot } from "react-dom/client";
import { FaCheck, FaTimes, FaExclamation } from "react-icons/fa";
import Notification from "../Components/Notifications/Notification";

// Container for all notifications
let container;

const getContainer = () => {
  if (!container) {
    container = document.createElement("div");
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.left = "20px";
    container.style.zIndex = "99999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "12px";
    document.body.appendChild(container);
  }
  return container;
};

/**
 * Show a notification
 * @param {string} message
 * @param {"info"|"success"|"error"} type
 * @param {number} duration
 */
export const notify = (message, type = "info", duration = 4000) => {
  const notifContainer = getContainer();
  const div = document.createElement("div");
  notifContainer.appendChild(div);
  const root = createRoot(div);

  let color = "#2979ff";
  let Icon = FaExclamation;

  if (type === "success") {
    color = "#4da6ff";
    Icon = FaCheck;
  } else if (type === "error") {
    color = "#b30000";
    Icon = FaTimes;
  }

  root.render(
    <Notification
      message={message}
      color={color}
      Icon={Icon}
      onDone={() => {
        root.unmount();
        div.remove();
      }}
    />
  );

  setTimeout(() => {
    root.unmount();
    div.remove();
  }, duration);
};
