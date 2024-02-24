const express = require("express");
const { regsiterUserCtrl,userLoginCtrl,userProfileCtrl,deleteUserCtrl,updateUserCtrl} = require("../../controllers/users/usersCtrl");
const isLogin = require("../../middlewares/isLogin");
const usersRoute = express.Router();


// POST/api/v1/users/register
usersRoute.post("/register",regsiterUserCtrl);

usersRoute.post("/login",userLoginCtrl);

usersRoute.get("/profile/",isLogin,userProfileCtrl);

usersRoute.delete("/",isLogin,deleteUserCtrl);

usersRoute.put("/",isLogin,updateUserCtrl);


module.exports = usersRoute;
