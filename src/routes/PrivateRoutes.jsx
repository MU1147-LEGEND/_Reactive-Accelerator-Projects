import { Navigate, Outlet } from "react-router";
import Header from "../components/common/Header";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
    const { auth } = useAuth();
    return (
        <>
            {auth.user ? (
                <main>
                    <Header />
                    <div className="container">
                        <Outlet />
                    </div>
                </main>
            ) : (
                <Navigate to={"/login"} />
            )}
        </>
    );
};
export default PrivateRoutes;
