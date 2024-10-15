import { useState, useEffect } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

const useAuthToken = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);
  return user;
};

export default useAuthToken;
