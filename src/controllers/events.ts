import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { Router } from "express";

const router = Router();
/**
 * GET /events
 * Contact form page.
 */
router.get("/", (req: Request, res: Response) => {
  res.send("all the users :)");
});

/**
 * GET /events/:id
 * Contact form page.
 */
router.get(
  "/:id",
  [
    param("id")
      .exists()
      .toInt()
      .isNumeric()
  ],
  async (req: Request, res: Response) => {
    const userId = req.params.id;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.send(errors);
      return;
    }

    res.send("a specific events of id " + userId);
  }
);

export default router;
