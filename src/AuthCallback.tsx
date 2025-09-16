import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("jwt", token);
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <p>Processing login...</p>;
};

export default AuthCallback;
