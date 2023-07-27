import express from "express";

export const userRouter = express.Router();

// Functions for Users
import { userSignin, userSignup } from "../controller/userController";

// POST /api/users/signin
userRouter.post("/signin", userSignin);

// POST /api/users/signup
userRouter.post("/signup", userSignup);
