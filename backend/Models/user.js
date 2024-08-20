const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: {
    type: String,
    rquired: true,
  },
  email: {
    type: String,
    rquired: true,
    unique: true,
  },
  password: {
    type: String,
    rquired: true,
  },
});
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
