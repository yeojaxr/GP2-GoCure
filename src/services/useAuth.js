import { useState, useEffect } from "react";
import { useUser } from "../context/user-context";

export default function useAuth() {
  const { user } = useUser();
  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    if (user) {
        if (user.length !== 0) {
            const currentUser = user.find((u) => u.userLogged === true);
            if (currentUser) {
                setLogin(true);
            } else setLogin(false);
        } else setLogin(false);
    } else setLogin(false);
  }, [isLogin, user]);
  return isLogin;
}
