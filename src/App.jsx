import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
        reset,
    } = useForm({
        mode: "onChange", // 🔥 ensures form revalidates on every change
        shouldUseNativeValidation: false,
    });

    const submitForm = (formData) => {
        const user = { email: "a@a.com", password: "123456" };

        const found =
            formData.email === user.email &&
            formData.password === user.password;

        if (!found) {
            console.log("❌ Wrong credentials");
            setError("loginError", {
                message: "User Not Found",
                type: "manual",
            });
        } else {
            console.log("✅ Login success");
            clearErrors(); // clear all previous errors
            toast.success("Login Success!", { autoClose: 2000 });
            reset(); // optional
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={handleSubmit(submitForm)}>
                <h1 className="text-xl font-semibold mb-4">Login details</h1>

                <label htmlFor="email">Email:</label>
                <input
                    {...register("email", {
                        required: "Email is required!",
                    })}
                    type="email"
                    id="email"
                    className={`w-full border-2 p-2 rounded outline-none ${
                        errors?.email ? "border-red-500" : "border-indigo-500"
                    }`}
                    placeholder="Email"
                />
                {errors?.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                )}

                <br />

                <label htmlFor="password">Password:</label>
                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    type="password"
                    id="password"
                    className={`w-full border-2 p-2 rounded outline-none ${
                        errors?.password
                            ? "border-red-500"
                            : "border-indigo-500"
                    }`}
                    placeholder="Password"
                />
                {errors?.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                )}

                <br />
                <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded"
                >
                    Login
                </button>

                {errors?.loginError && (
                    <p className="text-red-500 mt-2">
                        {errors.loginError.message}
                    </p>
                )}
            </form>

            <ToastContainer position="top-right" />
        </div>
    );
};

export default App;
