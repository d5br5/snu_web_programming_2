const express = require("express");
const { encryptPassword } = require("./utils");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();

const { Player } = require("./models/Player");
const { Field } = require("./models/Field");

mongoose.connect(
  "mongodb+srv://tester:Z5knBqgfuOqzb2Pu@cluster0.ye4cg.mongodb.net/Game0?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.urlencoded({ extended: true }));

const canMove = (player, x, y) => {
  return Math.abs(player.field.x - x) + Math.abs(player.field.y - y) === 1;
};

const authentication = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);
  const [bearer, key] = authorization.split(" ");
  if (bearer !== "Bearer") return res.sendStatus(401);
  const player = await Player.findOne({ key }).populate("field");
  if (!player) return res.sendStatus(401);

  req.player = player;
  next();
};

app.post(
  "/signup",
  [
    body("name").isLength({ min: 3, max: 20 }),
    body("email").isEmail(),
    body("password").isLength({ min: 10, max: 20 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, password } = req.body;

    if (await Player.findOne({ email })) {
      return res.status(400).json({ errors: { email: "Already registered" } });
    }

    const encryptedPassword = encryptPassword(password);

    const initField = await Field.findOne({ x: 2, y: 2 });
    const player = new Player({
      email,
      name,
      password: encryptedPassword,
      field: initField
    });

    player.maxHP = 10;
    player.HP = 10;
    player.str = 5;
    player.dex = 5;

    await player.save();

    return res.sendStatus(200);
  }
);

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const player = await Player.findOne({
    email,
    password: encryptPassword(password)
  });

  if (!player) return res.sendStatus(404);

  const key = crypto.randomBytes(24).toString("hex");
  player.key = key;
  await player.save();
  res.send({ key });
});

app.post("/action", authentication, async (req, res) => {
  const { action } = req.body;
  const player = req.player;

  if (action === "move") {
    const { x, y } = req.body;

    if (canMove(req.player, x, y)) {
      const field = await Field.findOne({ x, y });
      if (!field) return res.status(400).send({ error: "Out of Boundary" });

      player.field = field;

      await player.save();

      // TODO : field 에 따른 event encounter.
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } else if (action === "battle") {
  } else if (action === "battle") {
  }
});

app.get("/init", async (req, res) => {
  // field init
  // await Field.find
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const field = new Field({ x: i, y: j });
      await field.save();
    }
  }

  res.sendStatus(200);
});
app.listen(3000);
