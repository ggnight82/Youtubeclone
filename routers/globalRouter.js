import express from "express";
import { userJoin, userLogin, userLogout } from "../controller/userController";
import { videoHome, videoSearch } from "../controller/videoController";
import routes from "../routes";


const globalRouter = express.Router();

globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, videoSearch);
globalRouter.get(routes.join, userJoin);
globalRouter.get(routes.login, userLogin);
globalRouter.get(routes.logout, userLogout);


export default globalRouter; 