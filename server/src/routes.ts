import { Express, Request, Response } from "express";
import validateRequest from "./middlewares/validateRequest.middleware";
import {
  authRegisterValidator,
  authLoginSchema,
} from "./validators/auth.validator";
import {
  authRegisterHandler,
  authLoginHandler,
} from "./controllers/auth.controller";

const routes = (app: Express) => {
  // Health
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Auth
  app.post(
    "/api/register",
    validateRequest(authRegisterValidator),
    authRegisterHandler
  );
  app.post("/api/login", validateRequest(authLoginSchema), authLoginHandler);

  // Rick and Morty
  // list Characters + pagination
  // get action by Character
  // create Character
  // edit Character
  // delete Character
  // like char
};

export default routes;
