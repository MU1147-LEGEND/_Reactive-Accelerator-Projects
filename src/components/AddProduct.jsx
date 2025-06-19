import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../api";

const AddProduct = () => {
    const queryClient = useQueryClient();

    const [form, setForm] = useState({
        id: crypto.randomUUID(),
        name: "",
        category: "",
        imgUrl: "",
        price: "",
        inStock: true,
        rating: "",
    });

    const submitForm = (e) => {
        e.preventDefault();

        mutation.mutate(form);
    };

    const mutation = useMutation({
        mutationFn: (newProduct) => api.post("/products", newProduct),
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        },
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value =
            e.target.type === "number"
                ? e.target.valueAsNumber
                : e.target.value;

        setForm({
            ...form,
            [name]: value || "",
        });
    };

    // if (mutation.isLoading) return <span>Submitting</span>;

    return (
        <div className="w-1/5 m-2 p-2 bg-gray-100 h-1/2">
            <h2 className="text-2xl my-2">Add a Product</h2>
            <form onSubmit={submitForm} className="flex flex-col">
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    className="my-2 border border-indigo-500 outline-indigo-600 p-2 rounded"
                    placeholder="Product name"
                />
                <input
                    type="text"
                    value={form.category}
                    name="category"
                    onChange={handleChange}
                    className="my-2 border border-indigo-500 outline-indigo-600 p-2 rounded"
                    placeholder="Product category"
                />
                <input
                    type="text"
                    value={form.imgUrl}
                    name="imgUrl"
                    onChange={handleChange}
                    className="my-2 border border-indigo-500 outline-indigo-600 p-2 rounded"
                    placeholder="Product image link"
                />
                <input
                    type="number"
                    value={form.price}
                    name="price"
                    onChange={handleChange}
                    className="my-2 border border-indigo-500 outline-indigo-600 p-2 rounded"
                    placeholder="Price"
                />
                <input
                    type="number"
                    value={form.rating}
                    name="rating"
                    onChange={handleChange}
                    className="my-2 border border-indigo-500 outline-indigo-600 p-2 rounded"
                    placeholder="Product rating"
                />

                <button
                    type="submit"
                    className="mt-5 py-3 bg-indigo-500 text-white text-base rounded hover:bg-indigo-600 active:translate-y-1"
                >
                    Add
                </button>
            </form>
        </div>
    );
};
export default AddProduct;
