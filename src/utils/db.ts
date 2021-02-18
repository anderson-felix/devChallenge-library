import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://library-challenge:hEkBYJmezeuL1ZRN@dark-labs.zpzhw.mongodb.net/library-challenge?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("Mongo [OK]");
export const db = mongoose.connection;
