import routes from '../routes';

export const userGetJoin = (req, res) => { res.render('join', { pageTitle: 'Join' })};
export const userPostJoin = (req, res) => {
    
    const {
        body: {password, password2}
    } = req;
    
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle : "Join"});
    } else{
        // TODO : Register User
        // TODO : Log user in
        res.redirect(routes.home)
    }
    res.render("join",{pageTitle: "Join"})
    
}


export const userGetLogin = (req, res) => res.render("login",{pageTitle: "Log in"});
export const userPostLogin = (req, res) => {
    res.redirect(routes.home);
}
export const userLogout = (req, res) =>{
    //TODO : Process Log Out
    
    res.redirect(routes.home);
} 

export const users = (req, res) => res.render("users",{pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail",{pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile",{pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword",{pageTitle: "Change Password"});