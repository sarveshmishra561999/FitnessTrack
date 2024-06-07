const express=require("express")
const router = express.Router();
const homeRoute =require("../controllers/homeRoute.js")
router.route('/').get(homeRoute)

module.exports= router;