import {sampleVideos} from "../db"
import routes from "../routes"


export const videoHome = (req, res) => {
    res.render("home",{pageTitle: "Home", sampleVideos})
};
export const videoSearch = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req;
    // const searchingBy = req.query.term
    res.render("search",{pageTitle: "Search", searchingBy, sampleVideos /*: searchingBy*/})
};

export const videos = (req, res) => res.render("videos",{pageTitle: "Videos"});

export const getUpload = (req, res) => res.render("upload",{pageTitle: "Upload"});
export const postUpload = (req, res) => {
     const{
        body: { file, title, description }
     } = req;
     // TODO : Upload and save video
     res.redirect(routes.videoDetail(324393))
} 
export const videoDetail = (req, res) => res.render("videoDetail",{pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo",{pageTitle: "Edit video"});
export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle: "Delete Video"});