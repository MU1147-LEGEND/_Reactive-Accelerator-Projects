import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Field from "../common/Field";
// import { api } from "../../api/api";
import { useAxios } from "../../hooks/useAxios";

const LoginForm = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const api = useAxios();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const submitForm = async (formData) => {
        try {
            const response = await api.post("/auth/login", formData);

            if (response?.status === 200) {
                const { token, user } = response.data;
                if (token) {
                    const authToken = token.token;
                    const refreshToken = token.refreshToken;

                    console.log(authToken);
                    setAuth({ user, authToken, refreshToken });
                    navigate("/");
                }
            }
        } catch (err) {
            console.log(err);
            setError("root.random", {
                type: "random",
                message: `${err.response.data.error}`,
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
        >
            {/* email */}
            <div className="form-control">
                <Field label={"Email"} htmlFor={"email"} error={errors.email}>
                    <input
                        {...register("email", {
                            required: "Email ID is Required",
                        })}
                        className={`auth-input ${
                            errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                        name="email"
                        type="email"
                        id="email"
                    />
                </Field>
            </div>
            {/* password */}
            <div className="form-control">
                <Field
                    label={"Password"}
                    htmlFor={"password"}
                    error={errors.password}
                >
                    <input
                        {...register("password", {
                            required: "Enter a password to login",
                            minLength: {
                                value: 8,
                                message:
                                    "Your password must be at least 8 character",
                            },
                        })}
                        className={`auth-input ${
                            errors.password
                                ? "border-red-500"
                                : "border-gray-200"
                        }`}
                        name="password"
                        type="password"
                        id="password"
                    />
                </Field>
            </div>
            {/*show error */}
            <p> {errors?.root?.random.message} </p>
            {/* Submit */}
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >
                Login
            </button>
        </form>
    );
};
export default LoginForm;
