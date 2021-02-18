import { Router } from "express";

import { create, getBooks, update, remove } from "./controllers/books/index";

const routes = Router();

routes.post("/books", create);
routes.get("/books", getBooks);
routes.put("/books/:id", update);
routes.delete("/books/:id", remove);

export default routes;
