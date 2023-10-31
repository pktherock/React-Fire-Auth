import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import useAuth from "../contexts/Auth";

function CanActivate({ children, authentication = false }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (authentication && !user) {
      navigate("/auth/login");
    }
    setLoader(false);
  }, [authentication, user, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

CanActivate.propTypes = {
  // children: propTypes.arrayOf(propTypes.element).isRequired,
  children: propTypes.any,
  authentication: propTypes.bool,
};

export default CanActivate;
