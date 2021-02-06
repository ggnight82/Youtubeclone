
export const videoHome = (req, res) => 
    res.render("home",{pageTitle: "Home"});
export const videoSearch = (req, res) => 
    res.render("search",{pageTitle: "Search"});

export const videos = (req, res) => 
    res.render("videos",{pageTitle: "Videos"});
export const upload = (req, res) => 
    res.render("upload",{pageTitle: "Upload"});
export const videoDetail = (req, res) => 
    res.render("videoDetail",{pageTitle: "Video Detail"});
export const editVideo = (req, res) => 
    res.render("editVideo",{pageTitle: "Edit video"});
export const deleteVideo = (req, res) => 
    res.render("deleteVideo",{pageTitle: "Delete Video"});