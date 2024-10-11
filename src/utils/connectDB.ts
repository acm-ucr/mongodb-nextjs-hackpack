import { MongoClient, ServerApiVersion } from "mongodb";

type connectionType = {
  isConnected?: boolean;
  client?: MongoClient;
};

const connection: connectionType = {};
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("define the MONGODB_URI");
}
let db;

const connectDB = async () => {
  if (connection.isConnected) {
    return connection.client;
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    db = client.db();

    connection.isConnected = true;
    connection.client = client;

    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
