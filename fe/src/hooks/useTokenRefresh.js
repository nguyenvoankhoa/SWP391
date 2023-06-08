import { useEffect } from "react";

const useTokenRefresh = () => {
  useEffect(() => {
    const checkTokenExpiration = () => {
      const signinTime = localStorage.getItem("signinTime");
      const expirationTime = 86400000; // 24 hours in milliseconds
      const currentTime = Date.now();
      if (currentTime - signinTime >= expirationTime) {
        refreshToken();
      }
    };

    const refreshToken = () => {
      const refreshToken = localStorage.getItem("refreshToken");
      fetch("https://swp391-production.up.railway.app/refreshToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the access token in local storage
          localStorage.setItem("jwtToken", data.jwtToken);
        })
        .catch((error) => {
          // Handle error
          console.error("Error refreshing token:", error);
        });
    };

    const interval = setInterval(checkTokenExpiration, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useTokenRefresh;
