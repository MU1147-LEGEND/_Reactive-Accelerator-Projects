import { useNavigate } from "react-router";
import { fakeAuth } from "./utils/fakeAuth";

const Protected = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        fakeAuth.logout(()=> navigate("/dashboard/login"))
    }
    return (
        <>
            <div>
                <p>You're logged in, Welcome</p>
            </div>
            <button onClick={handleClick} className="btn btn-submit">Log Out</button>
        </>
    );
};
export default Protected;
