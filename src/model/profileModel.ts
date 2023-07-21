import { Schema, model } from "mongoose";
import { iProfile } from "../interface";

const profileSchema: Schema<iProfile> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your Email"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

const profileModel = model<iProfile>("profile", profileSchema);

export default profileModel;
