import mongoose from "mongoose";

const connectMongo = async () => {};
mongoose.connect(
  process.env.ENVIRONMENT === "PROD"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV
);

export default connectMongo;