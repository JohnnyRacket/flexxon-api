import { Router, Request, Response } from "express";

import users from "./users";
import teams from "./teams";
import events from "./events";

const routes = Router();

routes.use("/users", users);
routes.use("/teams", teams);
routes.use("/events", events);

const apiRoutes = Router();
apiRoutes.use("/api", routes);

export default apiRoutes;
