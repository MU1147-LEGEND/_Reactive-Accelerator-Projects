import { useNavigate } from "react-router";
import { fakeAuth } from "./utils/fakeAuth";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        fakeAuth.login(() => {
            navigate("/protected");
        });
    };
    return (
        <div>
            <button onClick={handleLogin} className="btn btn-submit">
                Login
            </button>
        </div>
    );
};
export default Login;
