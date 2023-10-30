import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./components";
import { PrivateLayout, PublicLayout } from "./layouts";

import AuthRoutes from "./features/auth/auth.routes";
import HomeRoutes from "./features/home/home.routes";

const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/auth" />,
  },

  {
    path: "/auth",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [...AuthRoutes],
  },

  {
    path: "/home",
    element: <PrivateLayout />,
    errorElement: <ErrorPage />,
    children: [...HomeRoutes],
  },
]);

export default appRoutes;
