const express = require("express");
const {createAccountCtrl,getAccountCtrl,deleteAccountCtrl,updateAccountCtrl,getAccountsCtrl } = require("../../controllers/accounts/accountsCtrl");
const isLogin = require("../../middlewares/isLogin");
const accountRoute = express.Router();

accountRoute.post("/",isLogin,createAccountCtrl);
accountRoute.get("/",getAccountsCtrl);
accountRoute.get("/:id",getAccountCtrl);
accountRoute.delete("/:id",deleteAccountCtrl);
accountRoute.put("/:id",updateAccountCtrl);

module.exports = accountRoute;
