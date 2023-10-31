import CanActivate from "../../guards/CanActivate";
import {
  DeleteUser,
  Login,
  Register,
  ResetPassword,
  UpdatePassword,
  UpdateProfile,
} from "./components";

const AuthRoutes = [
  {
    path: "",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "reset-password",
    element: (
      <CanActivate authentication>
        <ResetPassword />
      </CanActivate>
    ),
  },
  {
    path: "update-password",
    element: (
      <CanActivate authentication>
        <UpdatePassword />
      </CanActivate>
    ),
  },
  {
    path: "update-profile",
    element: (
      <CanActivate authentication>
        <UpdateProfile />
      </CanActivate>
    ),
  },
  {
    path: "delete-user",
    element: (
      <CanActivate authentication>
        <DeleteUser />
      </CanActivate>
    ),
  },
];

export default AuthRoutes;
