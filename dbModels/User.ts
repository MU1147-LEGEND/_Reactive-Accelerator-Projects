import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
