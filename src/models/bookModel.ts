import { AutoIncrementID } from "@typegoose/auto-increment";
import {
  prop,
  modelOptions,
  getModelForClass,
  plugin,
} from "@typegoose/typegoose";

import { db } from "../utils/db";

@modelOptions({ schemaOptions: { collection: "books" } })
@plugin(AutoIncrementID, { startAt: 1, incrementBy: 1, field: "id" })
export class Book {
  @prop({ type: Number, unique: true })
  public id: number;

  @prop({ type: String, required: true })
  title: string;

  @prop({ type: String, required: true })
  company: string;

  @prop({ type: String, required: true })
  image: string;

  @prop({ type: String, required: true })
  authors: string;
}
export const bookModel = getModelForClass(Book);

bookModel.db = db;
