import express from "express";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";
import todoRoutes from "./routes/task";
import userRoutes from './routes/users';
import activityRoutes  from "./routes/activity";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/task", todoRoutes);
app.use("/user", userRoutes);
app.use('/activity', activityRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.log("Err", err);
  });

app.listen(3000);
