import { useEffect, useState } from "react";
import { FaSignOutAlt, FaTiktok } from "react-icons/fa";
import api from "./api";
import { ScaleLoader } from "react-spinners";

const Profile = () => {
  const [name, setName] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    window.location.href =
      "https://nestjs-passport-tiktok-jwt.onrender.com/auth/tiktok";
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setName(undefined);
    setError(undefined);
  };

  useEffect(() => {
    // setIsLoggedIn(name ? true : false);

    if (localStorage.getItem("jwt")) {
      if (name === undefined) {
        setIsLoading(true);
        api
          .get("/auth/profile")
          .then((res) => {
            setName(res.data.displayName ?? "Authenticated");
            setError(undefined);
          })
          .catch((_) => {
            setError("Unable to log in");
          });
      }
    } else {
      setIsLoading(false);
    }
  }, [name]);

  return (
    <>
      {error ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>{error}</h1>
          <button onClick={handleLogin}>Try again</button>
        </div>
      ) : name ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaTiktok size={40} />
          <p>Logged in as:</p>
          <h1>{name}</h1>

          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px" }}>Log out</p>
            <FaSignOutAlt />
          </button>
        </div>
      ) : isLoading ? (
        <ScaleLoader color="white" />
      ) : (
        <button
          onClick={handleLogin}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <FaTiktok />
          <p style={{ marginLeft: "10px" }}>Login With Tiktok</p>
        </button>
      )}
    </>
  );
};

export default Profile;
