import "dotenv/config";

export default {
  port: process.env.PORT,
  dbUri: process.env.MONGO_URI,
  hashSalt: parseInt(process.env.HUSH_SALT!),
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL,
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL,
  origin: process.env.ORIGIN,
};
