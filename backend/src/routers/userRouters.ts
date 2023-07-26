import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { userModel } from "../models/userModel";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils";
import { Users } from "../types/Users";

export const userRouter = express.Router();

// POST /api/users/signin
userRouter.post(
  "/signin",
  asyncHandler(async (req: Request, res: Response) => {
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
  })
);
