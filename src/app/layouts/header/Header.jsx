import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/Auth";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogoutBtnClick() {
    if (user) {
      logout();
    }
    navigate("/auth/login");
  }

  return (
    <div className="sticky top-0 bg-blue-900 text-white w-screen p-3 shadow-lg flex justify-between">
      <h1>Header</h1>
      <button
        className="px-2 bg-blue-600 text-white"
        onClick={handleLogoutBtnClick}
      >
        {user ? "logout" : "login"}
      </button>
    </div>
  );
}

export default Header;
