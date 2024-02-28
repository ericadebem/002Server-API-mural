import express from "express";
import { getMural, postMural, getAllMural, deleteMural, updateMural } from "./controler.js";
export const muralRouter = express.Router();

muralRouter.route("/:id").get(getMural).delete(deleteMural).patch(updateMural);
muralRouter.route("/").post(postMural).get(getAllMural);
