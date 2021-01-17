import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);
const UserSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export const UserModel = mongoose.model("User", UserSchema);
