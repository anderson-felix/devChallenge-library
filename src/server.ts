import express from "express";

import routes from "./routes";

const server = express();

server.listen(3333);

server.use(express.json());

server.use(routes);
