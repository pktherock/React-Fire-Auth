import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

function CanActivate({ children, authentication = false }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = true; // todo

  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
    }
    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

CanActivate.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
  authentication: propTypes.bool,
};

export default CanActivate;
