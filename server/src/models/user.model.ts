import mongoose, { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import logger from "../utils/logger.utils";

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface UserDocument extends User, Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next: (err?: Error) => void) {
  const user = this as UserDocument;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get<number>("hashSalt"));
  user.password = bcrypt.hashSync(user.password, salt);
  return next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt.compare(password, user.password).catch((e: any) => {
    logger.error(e);
    return false;
  });
};

const UserModel = model<UserDocument>("User", userSchema);

export default UserModel;
