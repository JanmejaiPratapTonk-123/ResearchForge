import cors from "cors";
import express from "express";

import citationsRouter from "./routes/citations";
import healthRouter from "./routes/health";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRouter);
app.use("/", citationsRouter);

export default app;
