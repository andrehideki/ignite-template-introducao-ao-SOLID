import express from "express";

import { errorHandler } from "./errorHandler";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(errorHandler);

export { app };
