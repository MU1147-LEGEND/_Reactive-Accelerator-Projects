import mongoose from "mongoose";

const mongoURI: string = process.env.MONGODB_URI || "";
if (!mongoURI)
    throw new Error("Please define the MONGODB_URI environment variable");
const connection: { isConnected?: number } = {};
const cached: {
    connection: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
} = {
    connection: null,
    promise: null,
};

async function connectMongoDB() {
    // Check if already connected
    if (mongoose.connections[0].readyState === 1) {
        return mongoose;
    }

    if (cached.connection) return cached.connection;

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(mongoURI, opts);
    }

    try {
        cached.connection = await cached.promise;
        connection.isConnected = cached.connection.connections[0].readyState;
        console.log(
            `MongoDB connected to database: ${cached.connection.connections[0].name}`
        );

        // List all collections in the database
        const db = cached.connection.connections[0].db;
        if (db) {
            const collections = await db.listCollections().toArray();
            console.log(
                `Available collections: ${collections
                    .map((col) => col.name)
                    .join(", ")}`
            );
        }
    } catch (error) {
        cached.promise = null;
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }

    return cached.connection;
}

export default connectMongoDB;
