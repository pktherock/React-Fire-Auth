import { useEffect, useState } from "react";

import "./App.css";
import { AuthProvider } from "./contexts/Auth";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./app.routes";
import { authService, alertService } from "./services";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (userName, email, password) => {
    // console.log(userName, email, password);
    try {
      const user = await authService.createAccount(userName, email, password);
      setUser(user);
      alertService.success("User created and logged in successfully");
    } catch (error) {
      alertService.error(error.code);
    }
  };

  const login = async (email, password) => {
    // console.log(email, password);
    try {
      const user = await authService.login(email, password);
      console.log(user);
      setUser(user);
      alertService.success("Logged In successfully");
    } catch (error) {
      alertService.error(error.code);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      alertService.success("logged out successfully");
    } catch (error) {
      alertService.error(error.code);
    }
  };

  useEffect(() => {
    async function fetchUserData() {
      const user = await authService.getCurrentUser();
      console.log(user);
      setUser(user);
      setLoading(false);
    }
    fetchUserData();
  }, []);

  if (loading) return <h1 className="text-3xl">Loading...</h1>;

  if (user && !user.emailVerified)
    return (
      <h1 className="text-3xl text-center">
        Please verify email first and do refresh (check your email for
        verification link)
      </h1>
    );

  return (
    <AuthProvider value={{ user, signUp, login, logout }}>
      <ToastContainer newestOnTop />
      <RouterProvider router={appRoutes} />
    </AuthProvider>
  );
}

export default App;
