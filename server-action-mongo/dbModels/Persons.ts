// create a Persons model for mongooseimport mongoose from "mongoose";
import mongoose from "mongoose";

// creating schema for model
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous",
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

// creating the model
const Dog =
    mongoose.models.Dog || mongoose.model("Dog", DogSchema, "MyDogsCollection"); // Specify the collection name explicitly example: mongoose.model("ModelName", <Schema Name>, "CollectionName")

export default Dog; // exporting the model
