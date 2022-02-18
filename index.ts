import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
  console.log(`Time now: ${Date.now()}`);
  next();
});

app.get("/hello", (req, res) => {
  throw new Error("New Error!!!");
});

app.use("/users", userRouter);

// errors handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(`Error: ${err.message}`);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Server is running at http//:localhost:${port}`);
});
