import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/auth/useAuth";

const AuthenticateRoute = (Component = null, options = {}) => {
  return (props) => {
    const router = useRouter();
    const { isLogged } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const isLoggedIn = await isLogged();
        if (isLoggedIn) {
          setLoading(false);
        } else {
          router.push(options.pathAfterFailure || '/');
        }
      };
      checkAuth();
    }, [isLogged, router, options.pathAfterFailure]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
};

export default AuthenticateRoute;
