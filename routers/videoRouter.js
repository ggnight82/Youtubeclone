import express from "express";
import { editProfile } from "../controller/userController";

import { deleteVideo, upload, videoDetail, videos } from "../controller/videoController";

import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editProfile);
videoRouter.get(routes.deleteVideo, deleteVideo);


export default videoRouter;