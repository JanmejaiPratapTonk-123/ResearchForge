import cors from "cors";
import express from "express";

import healthRouter from "./routes/health";
import papersRouter from "./routes/papers";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRouter);
app.use("/", papersRouter);

export default app;
