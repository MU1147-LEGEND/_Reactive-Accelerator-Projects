import { Link, Outlet, useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const handleCart = () => {
        navigate("/cart");
    };
    return (
        <>
            <div className="w-4/5 m-auto">
                <h1>Home</h1>
                <button onClick={handleCart} className="btn btn-primary">
                    Add to cart
                </button>
                <Link to={"about"}>About</Link>
                <Outlet />
            </div>
        </>
    );
};
export default Home;
