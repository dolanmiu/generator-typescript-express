import {Router} from "express";
import * as controller from "./controller";

var router = Router();

router.get("/", controller.index);

module.exports = router;