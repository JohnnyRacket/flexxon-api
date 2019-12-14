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

/* 
The functions below allow us to bulk remove and add players while the application is running.
*/

router.post("/load", (req: Request, res: Response) => {
  const players = req.body;
  let p;
  for (p of players) {
    const wins = parseInt(p.wins);
    const losses = parseInt(p.losses);
    var player = new Player({
      name: p.name,
      wins,
      losses
    });

    player.save((err: any) => {
      if (err) res.send(err);
    });
  }
});

router.delete("/remove", (req: Request, res: Response) => {
  Player.deleteMany({}, (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log("All Players Removed.");
    }
  });
});

export default router;
