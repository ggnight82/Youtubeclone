import routes from "../routes";
import Video from "../models/Video";

export const videoHome = async (req, res) => {
    try{
        const videos = await Video.find({});
        throw Error("videoHome error");
        res.render("home",{pageTitle: "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home",{pageTitle: "Home", videos:[]});
    }
    
};
export const videoSearch = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req;
    // const searchingBy = req.query.term
    res.render("search",{pageTitle: "Search", searchingBy/*: searchingBy*/})
};
 
export const videos = (req, res) => res.render("videos",{pageTitle: "Videos"});

export const getUpload = (req, res) => res.render("upload",{pageTitle: "Upload"});
export const postUpload = (req, res) => {
     const{
        body: { file, title, description }
     } = req;
     console.log(body);
     // TODO : Upload and save video
     res.render("upload", {pageTitle: "Upload"});
     
     
} 
export const videoDetail = (req, res) => res.render("videoDetail",{pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo",{pageTitle: "Edit video"});
export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle: "Delete Video"});