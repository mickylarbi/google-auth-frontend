import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginButton from "./LoginButton";
import AuthCallback from "./AuthCallback";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
