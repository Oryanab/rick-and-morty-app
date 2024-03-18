import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";
import logger from "./logger.utils";
import { get } from "lodash";

export const signJwtToken = <T>(
  params: T,
  options?: jwt.SignOptions | undefined
): string | undefined => {
  try {
    const privateKey = config.get<string>("privateKey");
    const token = jwt.sign(params as T as Object, privateKey, {
      ...(options && options),
      algorithm: "HS256",
    });
    return token;
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const verifyJwtToken = (
  token: string
): {
  valid: boolean;
  expired: boolean;
  decoded: JwtPayload | string | null;
} => {
  try {
    const privateKey = config.get<string>("privateKey");
    const decoded = jwt.verify(token, privateKey) as jwt.JwtPayload;
    return {
      valid: true,
      expired: Date.now() >= decoded.exp! * 1000,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
};
