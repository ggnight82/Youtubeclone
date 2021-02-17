import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {localsMiddleware} from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
});
app.use(helmet({contentSecurityPolicy: false}));         //  helmet -> security를 담당하는 미들웨어
app.set("view engine","pug");
app.use("/uploads", express.static("uploads")); 
app.use(cookieParser());                                //  cookieParser -> cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어 (ex 사용자 인증)
app.use(bodyParser.json());                             //  bodyParser -> 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어 (requset 정보에서 form,JSON 형태로 이루어진 body를 검사)
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));                                 //  morgan -> application의 log를 담당하는 미들웨어
app.use(localsMiddleware);                              //  A middleware with no mount path -> excuted for every request from app

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

 
export default app;
