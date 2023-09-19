import { connections, connect, disconnect, ConnectionStates } from "mongoose";
import { getENV } from "./env";

type Connection = {
  isConnected?: ConnectionStates;
};

const connection: Connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("✔ Allready connected to the database.");
    return;
  }

  if (connections.length > 0) {
    connection.isConnected = connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("✋🤚 Use previous connections to the database.");
      return;
    }

    await disconnect();
  }

  const { MONGO_URL } = getENV();

  const db = await connect(MONGO_URL);

  console.log("🟢 New connection to the database.");

  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (!connection.isConnected) return;

  if (process.env.NODE_ENV === "production") {
    await disconnect();
    connection.isConnected = 0;
  }

  if (process.env.NODE_ENV === "development") {
    console.log("Not disconected from database.");
  }
}

const db = { connectDb, disconnectDb };

export default db;
