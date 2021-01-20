import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);
const UserSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: "7d" },
    },
  },
  { versionKey: false }
);

export const UserModel = mongoose.model("User", UserSchema);
