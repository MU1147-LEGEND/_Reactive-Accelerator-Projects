import { Link } from "react-router";

const Orders = () => {
    return (
        <>
            <h1 className=" text-2xl">Orders</h1>
            <ul className="flex flex-col gap-5">
                <Link to="1">
                    <li className="btn btn-secondary">Order 1</li>
                </Link>
                <Link to="2">
                    <li className="btn btn-secondary">Order 2</li>
                </Link>
            </ul>
        </>
    );
};
export default Orders;
