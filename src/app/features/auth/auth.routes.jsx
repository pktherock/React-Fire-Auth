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
    path: "register",
    element: <Register />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "update-password",
    element: <UpdatePassword />,
  },
  {
    path: "update-profile",
    element: <UpdateProfile />,
  },
  {
    path: "delete-user",
    element: <DeleteUser />,
  },
];

export default AuthRoutes;
