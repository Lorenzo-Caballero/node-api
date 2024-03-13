import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getMyTop5PowerRangersSeasons } from "./topSeasons.js";
import usersRoutes from "../routes/users.routes.js";
import designsRoutes from "../routes/designs.routes.js";
import indexRoutes from "../routes/index.routes.js";

var app = express();
app.use(cors());

const router = express.Router();

router.get("/my-top-5-power-rangers-seasons", function (req, res) {
  res.json(getMyTop5PowerRangersSeasons());
});

// Iniciar servidor

app.use("/.netlify/functions/server", indexRoutes);
app.use("/.netlify/functions/server", usersRoutes);
app.use("/.netlify/functions/server", designsRoutes);

app.use('/.netlify/functions/server', router);
export const handler = serverless(app);
// app.listen(port);