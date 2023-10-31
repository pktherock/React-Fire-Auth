import { RouterProvider } from "react-router-dom";
import appRoutes from "./app.routes";
import { AuthProvider } from "./contexts/Auth";
import { authService } from "./services";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password) => {
    const user = await authService.createAccount(email, password);
    setUser(user);
  };

  const login = async (email, password) => {
    console.log(email, password);
    const user = await authService.login(email, password);
    console.log(user);
    setUser(user);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
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


  if(loading) return <h1>Loading...</h1>

  return (
    <AuthProvider value={{ user, signUp, login, logout }}>
      <RouterProvider router={appRoutes} />
    </AuthProvider>
  );
}

export default App;
