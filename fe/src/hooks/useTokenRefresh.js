import { useEffect } from "react";

const useTokenRefresh = () => {
  useEffect(() => {
    const checkTokenExpiration = () => {
      refreshToken();
    };

    const refreshToken = async () => {
      const refreshToken = JSON.parse(sessionStorage.getItem("refreshToken"));
      const response = await fetch(
        "https://swp391-production.up.railway.app/refresh-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      console.log(data);
      sessionStorage.setItem("jwtToken", JSON.stringify(data.access_token));
      sessionStorage.setItem(
        "refreshToken",
        JSON.stringify(data.refresh_token)
      );
    };

    const interval = setInterval(checkTokenExpiration, 600000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useTokenRefresh;
