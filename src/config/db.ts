import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/profileAPI";
const ATLAS_URI =
  "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/testProfile?retryWrites=true&w=majority";

const dbConfig = () => {
  mongoose.connect(ATLAS_URI);

  mongoose.connection
    .on("open", () => {
      console.log("Database Connected 🔥🔥🔥");
    })
    .once("error", () => {
      console.log("Error Connecting to database");
    });
};

export default dbConfig;
