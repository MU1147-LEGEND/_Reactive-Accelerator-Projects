import connectMongoDB from "@/dbConnect/connectMongoDB";
import Dog from "@/dbModels/Persons";
import Person from "@/dbModels/Persons";
import User from "@/dbModels/User";
import type { FunctionComponent } from "react";

const NewUserForm: FunctionComponent = () => {
    const addUser = async (formData: FormData): Promise<void> => {
        "use server";

        const name = formData.get("name");
        const email = formData.get("email");

        const userData = { name, email };

        // connect with database
        await connectMongoDB();

        // add user to database
        const dog = await new Dog(userData);
        await dog.save();
    };

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
                    <button className=" border py-3 px-5 bg-indigo-400 text-black rounded-lg cursor-pointer hover:scale-105 active:translate-y-1 transition-all duration-200">
                        Add User on DB
                    </button>
                </div>
            </form>

            {/* showing user list */}
            <div className="bg-gray-700 p-5 rounded-lg mt-10">
                <h2 className="text-lg font-bold text-center my-5">
                    User List
                </h2>

                <ul className="list-disc pl-5">
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                    <li>User 1 - email: user1@example.com</li>
                    <li>User 2 - email: user2@example.com</li>
                    <li>User 3 - email: user3@example.com</li>
                </ul>
            </div>
        </div>
    );
};
export default NewUserForm;
