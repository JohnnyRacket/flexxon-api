import { Request, Response } from "express";
import { param, validationResult } from "express-validator";
import { Router } from "express";
import Player from "../models/player";

const router = Router();
/**
 * GET /players
 * Contact form page.
 */
router.get("/", (req: Request, res: Response) => {
  Player.find((err: any, players: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(players);
    }
  });
});

/**
 * GET /players/:id
 * Contact form page.
 */
router.get(
  "/:id",
  [
    param("id")
      .exists()
      .isAlphanumeric()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.send(errors);
      return;
    }

    Player.findById(req.params.id, (err: any, player: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(player);
      }
    });
  }
);

router.get("/add/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  var player = new Player({ name: name, wins: 6, losses: 9 });

  player.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(player);
    }
  });
});

export default router;
