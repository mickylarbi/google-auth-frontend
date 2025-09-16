const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = "https://nestjs-passport-tiktok-jwt.onrender.com/auth/tiktok";
  };

  return <button onClick={handleLogin}>Login with Tiktok</button>;
};

export default LoginButton;
