import { Request, Response } from "express";
import { Router } from "express";
import path from "path";

const router = Router();
/**
 * GET /
 * Home page.
 */
router.get("/", (req: Request, res: Response) => {
  res.send(
    `<html>
    <body>
        <h1>Flexxon Stats API</h1>
        <pre>
  /api
  |
  |
  ---- /players
      |
      ---- GET /
      |
      ---- GET /:id
        </pre>
    </body>
    </html>`
  );
});

export default router;
