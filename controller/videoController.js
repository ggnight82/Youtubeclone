import routes from '../routes';
import Video from '../models/Video';

export const videoHome = async (req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home",{pageTitle: "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home",{pageTitle: "Home", videos:[]});
    }
    
};
export const videoSearch = async (req, res) => {
    const {
        query: {term: searchingBy}
    } = req;
    let videos = [];
    // const searchingBy = req.query.term
    try{
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i"}
        });
    } catch(error){
        console.log(error);
    }
    res.render("search",{pageTitle: "Search", searchingBy/*: searchingBy*/,videos})
};
 
export const videos = (req, res) => res.render("videos",{pageTitle: "Videos"});

export const getUpload = (req, res) => res.render("upload",{pageTitle: "Upload"});
export const postUpload = async (req, res) => {
     const { 
         body: { title, description }, 
         file: { path } 
        } = req;
     
     const newVideo = await Video.create({
         fileUrl: path,
         title,
         description
     });
     res.redirect(routes.videoDetail(newVideo.id));
          
};
export const videoDetail = async (req, res) => {
    const {
        params : { id }
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle: video.title, video});
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
    
};
export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
        console.log(video);
    } catch(error){
        res.redirect(routes.home);
    }
}
export const postEditVideo = async  (req, res) => {
    const {
        params: {id},
        body: {title,description}
    } = req; 
    try{
        await Video.findOneAndUpdate({_id: id},{title, description});
        res.redirect(routes.videoDetail(id));
    } catch(error){
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: {id}
    } = req;

    try{
        await Video.findOneAndRemove({_id: id});
    // eslint-disable-next-line no-empty
    } catch(error){}
    res.redirect(routes.home);
}