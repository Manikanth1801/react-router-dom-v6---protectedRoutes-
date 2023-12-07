import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: FC = () => {
  const authState = { token: true }; // Make it true for succesful auth
  return <>{authState.token ? <Outlet /> : <Navigate to="/" />}</>;
};
export default PrivateRoutes;
