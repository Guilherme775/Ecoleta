import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/points.controller";
import ItensController from "./controllers/items.controller";

const routes = express.Router();
const upload = multer(multerConfig);

const itensController = new ItensController();
const pointsController = new PointsController();

routes.get("/items", itensController.index);

routes.post("/points", upload.single("image"), pointsController.create);

routes.get("/points", pointsController.index);

routes.get("/points/:id", pointsController.show);

export default routes;
