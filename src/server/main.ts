import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import helmet from "helmet";
import { UserApiController } from "./controllers/user.js";

const app = express();
const port = parseInt((process.env.PORT as string) || "3000");

app.use(
  cors({
    origin(requestOrigin, callback) {
      if (!requestOrigin || requestOrigin === process.env.SERVER_DOMAIN)
        callback(null);
      else callback(new Error("Blocked by cors!"));
    },
    methods: ["GET", "PUT", "POST", "DELETE"],
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("api/users/register", UserApiController.handleRegistration);

ViteExpress.listen(app, port, () =>
  console.log("Server is listening on port 3000..."),
);
