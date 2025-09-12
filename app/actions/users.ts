import connectMongoDB from "@/dbConnect/connectMongoDB";
import User from "@/dbModels/User";
import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData): Promise<void> => {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    const userData = { name, email };

    try {
        // connect with database
        await connectMongoDB();

        // add user to database
        console.log(
            `Attempting to save to collection: ${User.collection.name}`
        ); // print the collection name which is using.

        const person = await new User(userData);
        await person.save();
        revalidatePath("/");
    } catch (error) {
        console.log("Error saving user:", error);
    }
};

export const getUsers = async () => {
    try {
        await connectMongoDB();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log("Error getting users: ", err);
    }
};
