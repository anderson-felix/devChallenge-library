import { Request, Response } from "express";

import { bookModel } from "../../models/bookModel";

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  await bookModel.findByIdAndDelete(id);

  return res.status(200).json({ message: "Book deleted" });
};
