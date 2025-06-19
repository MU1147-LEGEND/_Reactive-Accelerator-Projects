import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const ProductDetails = () => {
    const { id } = useContext(ProductContext);
    const getProduct = async ({ queryKey }) => {
        const response = await api.get(`/${queryKey[0]}/${queryKey[1]}`);

        return response.data;
    };

    const { data: product } = useQuery({
        queryKey: ["products", id],
        queryFn: getProduct,
    });

    if (!id) {
        return (
            <div className="text-gray-400 p-5">
                Click on a product to see details
            </div>
        );
    }
    return (
        <>
            {product ? (
                <div className="sticky h-screen top-0 right-0 shadow-md rounded-2xl p-5 w-1/5">
                    <div className="img overflow-hidden ">
                        <img
                            src={product.imgUrl}
                            className="h-[6rem] m-auto hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="info flex items-baseline justify-between gap-3">
                        <div className="flex flex-col">
                            <span className="text-base cursor-pointer">
                                <strong>Name</strong>: {product.name}
                            </span>
                            <span className="text-base ">
                                <strong>Price</strong>: {product.price}$
                            </span>
                            <span>
                                <strong>Category:</strong> {product.category}{" "}
                            </span>
                            <span>
                                <strong>Rating</strong>:{product.rating}
                            </span>
                        </div>
                    </div>

                    <button className="absolute bottom-12 right-0 left-0 bg-pink-600 py-3 text-white font-semibold text-base transition-all duration-300 hover:bg-pink-700">Buy Now</button>
                </div>
            ) : (
                <div
                    className=" shadow-md rounded-2xl p-5 w-1/5"
                ></div>
            )}
        </>
    );
};
export default ProductDetails;
