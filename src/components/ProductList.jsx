import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { useState } from "react";

const ProductList = () => {
    const { id, setId } = useContext(ProductContext);
    const [page, setPage] = useState(1);

    const getProducts = async ({ queryKey }) => {
        const response = await api.get(
            `${queryKey[0]}?_page=${queryKey[1].page}&_per_page=8`
        );
        return response.data;
    };

    const {
        data: products,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["products", { page }],
        queryFn: getProducts,
    });

    // rendering jsx
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
            <div className="">
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="products grid grid-cols-2  md:grid-cols-3 gap-3 place-items-center max-w-11/12 m-auto min-h-[600px] p-5">
                    {products &&
                        products.data.map((product) => (
                            <div
                                key={product.id}
                                className="product shadow-sm hover:shadow-md rounded-2xl p-5 flex justify-center flex-col h-full"
                                onClick={() => setId(product.id)}
                            >
                                <div className="img overflow-hidden h-36">
                                    {isLoading || !product.imgUrl ? (
                                        <p className="h-[9rem] w-full rounded-xl shadow-xl bg-gray-800/50 animate-pulse"></p>
                                    ) : (
                                        <img
                                            src={product.imgUrl}
                                            className="h-[9rem] m-auto hover:scale-105 transition-all duration-300"
                                        />
                                    )}
                                </div>
                                <div className="info flex items-baseline justify-between gap-3">
                                    <div className="flex flex-col">
                                        <span className="text-base cursor-pointer">
                                            {product.name}
                                        </span>
                                        <span className="text-base ">
                                            ${product.price}
                                        </span>
                                    </div>
                                    <div className="bg-amber-400/50">
                                        <span>Rating:{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* pagination button */}
                <div className="select-none sticky bottom-5 left-0 right-0 flex items-center justify-center gap-5 my-5">
                    <button
                        className={`bg-stone-300 px-4 py-2 cursor-pointer rounded active:translate-y-1 scale-100 transition-all duration-300 ${
                            !products?.prev
                                ? "scale-0 opacity-0 pointer-events-none"
                                : ""
                        }`}
                        onClick={() => setPage(products.prev)}
                    >
                        Prev
                    </button>

                    <span className="mx-5">{page}</span>

                    <button
                        className={`bg-stone-300 px-4 py-2 cursor-pointer rounded active:translate-y-1 scale-100 transition-all duration-300 ${
                            !products?.next
                                ? "scale-0 opacity-0 pointer-events-none"
                                : ""
                        }`}
                        onClick={() => setPage(products.next)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};
export default ProductList;
