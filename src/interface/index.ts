import { Document } from "mongoose";
import { Httpcode } from "../utils/appError";

export interface ErrorArgs {
  name?: string;
  isOperatonal: boolean;
  message: string;
  httpCode: Httpcode;
}

export interface iProfile extends Document {
  name: string;
  email: string;
  age: number;
  bio: string;
}
