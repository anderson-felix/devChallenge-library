import { Request, Response } from "express";
import * as yup from "yup";

import { bookModel } from "../../models/bookModel";

export const create = async (req: Request, res: Response) => {
  const schema = yup.object().shape({
    title: yup.string().max(60).required(),
    company: yup.string().max(60).required(),
    image: yup.string().required(),
    authors: yup.string().max(60).required(),
  });
  try {
    await schema.validate(req.body, { abortEarly: false });
  } catch (err) {
    return res.status(400).json({ error: err });
  }

  const { title, company, image, authors } = req.body;

  const register = {
    title,
    company,
    image,
    authors,
  };

  const book = new bookModel();

  Object.assign(book, register);

  try {
    const data = await bookModel.create(book);
    await data.save();

    return res.status(201).json({ created: data });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
