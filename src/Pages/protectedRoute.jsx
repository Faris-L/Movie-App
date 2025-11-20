import { Navigate, Outlet } from "react-router-dom";
import { useNotifications } from "../Context/notificationContext";
import { useRef, useEffect, useState } from "react";

export default function ProtectedRoute({ user, redirectPath = "/login" }) {
  const { addNotification } = useNotifications();
  const hasRedirected = useRef(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user && !hasRedirected.current) {
      hasRedirected.current = true;

      alert(
        "You currently are not logged in, therefore you cannot access Watchlist, Profile, or Details. You are being redirected to the login page."
      );

      addNotification({
        message: "Redirected to Login",
        type: "warning",
      });

      setRedirect(true);
    }
  }, [user, addNotification]);

  if (!user && redirect) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
