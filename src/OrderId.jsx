import { useParams } from "react-router";

const OrderId = () => {
    const { id } = useParams();

    return <div>Order Details for Order no. {id} </div>;
};
export default OrderId;
