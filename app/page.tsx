import type { FunctionComponent } from "react";
import { addUser, getUsers } from "./actions/users";
import Button from "./ui/Button";

const NewUserForm: FunctionComponent = async () => {
    const users = (await getUsers()) ?? [];
    //
    return (
        <div className="bg-gray-800/70 p-10 rounded-lg w-[50vw] m-auto min-h-screen">
            <form action={addUser} className="flex flex-col items-center ">
                <div className="my-5 flex flex-col items-baseline ">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border p-1"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="my-5 flex flex-col items-baseline ">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border p-1"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="my-5 flex flex-col items-baseline ">
                    {/* <button className=" ">
                        Add User on DB
                    </button> */}
                    <Button className="border py-3 px-5 bg-indigo-400 disabled:bg-gray-400 text-black rounded-lg cursor-pointer hover:scale-105 active:translate-y-1 transition-all duration-200">
                        {" "}
                        Add User
                    </Button>
                </div>
            </form>

            {/* showing user list */}
            <div className="bg-gray-700 p-5 rounded-lg mt-10">
                <h2 className="text-lg font-bold text-center my-5">
                    User List
                </h2>

                <ul className="pl-5">
                    {users?.length > 0 ? (
                        users?.map((user) => (
                            <li
                                key={user._id ?? user.email}
                                className="my-5 bg-gray-400/20 p-5 rounded-2xl"
                            >
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                            </li>
                        ))
                    ) : (
                        <h4>No user found</h4>
                    )}
                </ul>
            </div>
        </div>
    );
};
export default NewUserForm;
