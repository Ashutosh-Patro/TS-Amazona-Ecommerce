import express from "express";

export const userRouter = express.Router();

// Functions for Users
import { userSignin } from "../controller/userController";

// POST /api/users/signin
userRouter.post("/signin", userSignin);
