import { Users } from "./types/Users";
import jwt from "jsonwebtoken";

export const generateToken = (user: Users) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "justasecret",
    {
      expiresIn: "30d",
    }
  );
};
