import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("jwt", token);
      navigate("/");
    }
  }, [navigate]);

  return <ScaleLoader color="white"/>;
};

export default AuthCallback;
