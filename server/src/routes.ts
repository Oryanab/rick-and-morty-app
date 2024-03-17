import { Express, Request, Response } from "express";
import validateRequest from "./middlewares/validateRequest.middleware";
import {
  authRegisterValidator,
  authLoginValidator,
} from "./validators/auth.validator";
import {
  authRegisterHandler,
  authLoginHandler,
  authSessionHandler,
} from "./controllers/auth.controller";
import {
  listCharactersHandler,
  getCharacterHandler,
} from "./controllers/characters.controller";
import {
  listRequestValidator,
  getSingleRequestValidator,
} from "./validators/characters.validator";
import authenticateUser from "./middlewares/authenticateUser.middleware";

const routes = (app: Express) => {
  // Health
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Auth
  app.post(
    "/api/register",
    validateRequest(authRegisterValidator),
    authRegisterHandler
  );
  app.post("/api/login", validateRequest(authLoginValidator), authLoginHandler);
  app.get("/api/session", authenticateUser, authSessionHandler);

  // Rick and Morty List
  app.get(
    "/api/characters/:page",
    [authenticateUser, validateRequest(listRequestValidator)],
    listCharactersHandler
  );
  app.get(
    "/api/character/:id",
    [authenticateUser, validateRequest(getSingleRequestValidator)],
    getCharacterHandler
  );
};

export default routes;
