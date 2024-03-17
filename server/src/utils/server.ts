import express from "express";
import cors from "cors";
import config from "config";
import cookieParser from "cookie-parser";

const createServer = () => {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: config.get<string>("origin"),
      credentials: true,
    })
  );

  return app;
};

export default createServer;
