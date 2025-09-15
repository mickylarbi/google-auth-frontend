import { useEffect, useState } from "react";
import api from "./api";

const Profile = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api
      .get("/auth/profile")
      .then((res) => setData(res.data))
      .catch((err) => {
        setData({ error: err.response?.data || "Unauthorized" });
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Profile;
