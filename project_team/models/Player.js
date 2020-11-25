const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Player = mongoose.model("Player", {
  name: String,
  email: String,
  password: String,
  key: String,

  level: Number,
  exp: Number,

  maxHP: Number,
  maxMP: Number,
  HP: Number,
  MP: Number,
  str: Number,
  dex: Number,
  position: { ref: "Field", type: Schema.Types.ObjectId }
});

module.exports = {
  Player
};

// signup
// signin
