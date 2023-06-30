import { Route, Routes } from "react-router-dom";
import { AppConfigs } from "./utilities/appConfigs";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppConfigs.Landing}>
        <Route index element={<LandingPage />} />
        <Route path={AppConfigs.Login} element={<Login />} />
        <Route path={AppConfigs.Signup} element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
