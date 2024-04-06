import mongoose from "mongoose";

const config = {
  isConnected: 0,
};

export const connectDB = async () => {
  if (config.isConnected) {
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("connected to host: ", connection.host);
    config.isConnected = connection.readyState;
  } catch (err) {
    console.log("failed to connect with database");
    console.log(err);
  }
};
