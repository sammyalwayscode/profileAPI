// import mongoose from "mongoose";

// const MONGODB_URI = "mongodb://127.0.0.1:27017/profileApp";

// mongoose.connect(MONGODB_URI);
// mongoose.connection
//   .on("open", () => {
//     console.log("Database Connected");
//   })
//   .once("error", () => {
//     console.log("Failed to connect to database");
//   });

import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/profileAPI";

const dbConfig = () => {
  mongoose.connect(MONGODB_URI);

  mongoose.connection
    .on("open", () => {
      console.log("Database Connected 🔥🔥🔥");
    })
    .once("error", () => {
      console.log("Error Connecting to database");
    });
};

export default dbConfig;
