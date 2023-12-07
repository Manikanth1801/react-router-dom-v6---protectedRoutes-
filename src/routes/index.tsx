import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { DisplayPage, HomePage, ProtectedPage } from "../pages";
import PrivateRoutes from "./private";

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
