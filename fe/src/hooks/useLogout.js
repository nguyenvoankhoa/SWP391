import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const logout = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://swp391-production.up.railway.app/logout"
      );
      if (!res.ok) {
        throw new Error("Error");
      } else {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("jwtToken");
        sessionStorage.removeItem("signinTime");
        sessionStorage.removeItem("refreshToken");
        nav("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, logout };
};

export default useLogout;
