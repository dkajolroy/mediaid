// config/dbConnect.tsx

import { connect, connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
function dbConnect() {
  if (connection.readyState < 1) {
    connect(MONGODB_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err));
  } else {
    return;
  }
}

export default dbConnect;
