import { Request, Response } from "express";

import { bookModel } from "../../models/bookModel";

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await bookModel.findOne({ id });

  if (!book) return res.status(404).json({ error: `Book ${id} not found` });

  await bookModel.updateMany(book, req.body);
  await book.save();

  const newBook = await bookModel.findOne({ id });
  return res.status(200).json({ updated: newBook });
};
