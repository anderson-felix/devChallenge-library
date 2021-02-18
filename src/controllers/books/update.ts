import { Request, Response } from "express";

import { bookModel } from "../../models/bookModel";

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await bookModel.findByIdAndUpdate(id, req.body);

  return res.status(200).json({ updated: book });
};
