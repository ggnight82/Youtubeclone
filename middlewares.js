/*
    res.locals

    res.locals의 프로퍼티들은 request의 라이프 타임 동안에만 유효하다.
    html/view 클라이언트 사이드로 변수들을 보낼 수 있으며, 그 변수들은 오로지 거기서만 사용할 수 있다.

    locals에 로컬 변수를 저장하면 이 변수를 view안에 있는 템플릿(.pug파일)들에서 사용 할 수 있다 => 템플릿을 직접 수정하지 않고, locals 내부의 변수들만 수정하면 된다.
    ==>이 미들웨어는 코드 사이에 들어가 있기 때문에, next() 를 호출해야한다. 다음 함수들로 넘어가야하기 때문이다.

*/

import multer from "multer";
import routes from "./routes";



const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {

    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    } 
    next();
};

export const uploadVideo = multerVideo.single('videoFile'); //원하는 파일이 들어간 HTML field의 name 부분을 single()안에 넣어줌