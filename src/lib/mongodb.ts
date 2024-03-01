import { MongoClient, ServerApiVersion } from "mongodb";

let clientPromise: Promise<MongoClient>;

const connectMongoClient = () => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MongoDB URI Not found");
    }

    if (clientPromise) {
        return clientPromise;
    } else {
        const client = new MongoClient(process.env.MONGODB_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        clientPromise = client.connect();

        return clientPromise;
    }
};

export default connectMongoClient;
