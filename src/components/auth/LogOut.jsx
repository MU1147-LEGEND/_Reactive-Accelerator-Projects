import { useNavigate } from "react-router";
import logout from "../../assets/icons/logout.svg";
import useAuth from "../../hooks/useAuth";

const LogOut = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        // setAuth({});
        navigate("/login");
    };

    return (
        <>
            <button className="icon-btn" onClick={handleLogOut}>
                <img src={logout} alt="Logout" />
            </button>
        </>
    );
};
export default LogOut;
