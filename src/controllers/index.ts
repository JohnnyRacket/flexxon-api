import { Router, Request, Response } from "express";

import players from "./players";
import teams from "./teams";
import events from "./events";

const routes = Router();

routes.use("/players", players);
routes.use("/teams", teams);
routes.use("/events", events);

const apiRoutes = Router();
apiRoutes.use("/api", routes);

export default apiRoutes;
