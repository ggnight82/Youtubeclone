import express from "express";
import routes from "../routes";
import { deleteVideo, getEditVideo, getUpload,   postEditVideo,   postUpload, videoDetail, videos } from "../controller/videoController";
import { uploadVideo } from "../middlewares";


const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo , postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Video Edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Video Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);



export default videoRouter;