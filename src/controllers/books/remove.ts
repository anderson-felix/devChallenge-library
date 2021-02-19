import { Request, Response } from "express";

import { bookModel } from "../../models/bookModel";

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await bookModel.findOne({ id });

  if (!book) return res.status(404).json({ error: `Book ${id} not found` });

  await bookModel.deleteOne({ id: book.id });

  return res.status(200).json({ message: `Book ${id} deleted successfully` });
};
