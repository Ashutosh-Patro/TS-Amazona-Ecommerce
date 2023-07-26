import asyncHandler from "express-async-handler";
import { userModel } from "../models/userModel";
import { Request, Response } from "express";
import { generateToken } from "../utils";
import bcrypt from "bcryptjs";
import { Users } from "../types/Users";

// User Signin
export const userSignin = asyncHandler(async (req: Request, res: Response) => {
  const user: Users | null = await userModel.findOne({
    email: req.body?.email,
  });
  if (user) {
    if (bcrypt.compareSync(req.body?.password, user?.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
});
