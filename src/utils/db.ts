import mongoose from "mongoose";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  "mongodb+srv://library-challenge:hEkBYJmezeuL1ZRN@dark-labs.zpzhw.mongodb.net/library-challenge?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
);
console.log("Mongo [OK]");
export const db = mongoose.connection;
