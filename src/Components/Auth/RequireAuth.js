import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../../state/UserContext";

function RequireAuth({ allowedRoles }) {
  const { user } = useUser();
  console.log(user);
  const location = useLocation();
  return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
