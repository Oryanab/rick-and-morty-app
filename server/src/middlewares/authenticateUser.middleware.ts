import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { verifyJwtToken } from "../utils/jwt.utils";

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken =
    get(req, "cookies.accessToken") ||
    get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  if (!accessToken) {
    return next();
  }

  const { decoded } = verifyJwtToken(accessToken);

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  return next(); //res.status(403).send("Invalid user or session expired please login");
};

export default authenticateUser;
