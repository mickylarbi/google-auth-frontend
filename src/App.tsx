import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import AuthCallback from "./AuthCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;
