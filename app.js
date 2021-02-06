import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()

app.set("view engine","pug");
app.use(cookieParser());                                //  cookieParser -> cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어 (ex 사용자 인증)
app.use(bodyParser.json());                             //  bodyParser -> 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어 (requset 정보에서 form,JSON 형태로 이루어진 body를 검사)
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());                                      //  helmet -> security를 담당하는 미들웨어
app.use(morgan("dev"));                                 //  morgan -> application의 log를 담당하는 미들웨어

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);


export default app;
