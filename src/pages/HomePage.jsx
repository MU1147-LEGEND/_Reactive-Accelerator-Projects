import { Link } from "react-router";
import Header from "../components/common/Header";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
const {auth} = useAuth();
console.log(auth);
    return (
        <div>
            <p>Homepage</p>
            <Link to={'/me'} >Profile</Link>
        </div>
    );
};
export default HomePage;
