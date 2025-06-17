import { Link, Outlet } from "react-router";

const Dashboard = () => {
    return (
        <>
            <div className="w-4/5 m-auto">
                <h1 className="text-xl">Dashboard</h1>
                <br /> <br /> <hr /> <br /> <br />
                <div className="flex gap-5">
                    <Link to="/dashboard" className="btn btn-primary">
                        Profile
                    </Link>
                    <Link to="notifications" className="btn btn-secondary">
                        Notifications
                    </Link>
                    <Link to="orders" className="btn btn-secondary">
                        Orders
                    </Link>
                </div>
                <br /> <br />
                <Outlet />
            </div>
        </>
    );
};
export default Dashboard;
