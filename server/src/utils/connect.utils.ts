import mongoose from "mongoose";
import config from "config";
import logger from "./logger.utils";

const connectDatabase = (): void => {
  const dbUri = config.get<string>("dbUri");
  mongoose.connect(dbUri);
  mongoose.connection.on("error", (error: Error) => {
    logger.error(error);
    process.exit(1);
  });
  mongoose.connection.on("connected", () =>
    logger.info("Connected to MongoDB successfully")
  );
};

export default connectDatabase;
