import { useEffect, useState } from "react";
import useAuth from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const { login, user } = useAuth();

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
      navigate("/home");
    }
    setLoading(false);
  }, [user, navigate]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
