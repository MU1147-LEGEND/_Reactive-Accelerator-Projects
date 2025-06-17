import { Children } from "react";
import { fakeAuth } from "./utils/fakeAuth";
import { Outlet, useNavigate } from "react-router";
import Error from "./Error";
import { useEffect } from "react";

const AuthRoute = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = fakeAuth;
    useEffect(() => {
        if(!isAuthenticated){
            navigate("/dashboard/login")
        }
    });
    if (!isAuthenticated) return;

    return <Outlet />;
};
export default AuthRoute;
