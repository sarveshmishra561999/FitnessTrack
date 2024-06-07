const express=require("express");
const router=express.Router();
const {UserLogin, UserRegister,addWorkout,getUserDashboard,getWorkoutsByDate,}=require("../controllers/User.js");
const verifyToken=require("../middleware/verifyToken");

router.route("/signup").post(UserRegister);
router.route("/signin").post(UserLogin);
router.route("/dashboard").get(verifyToken,getUserDashboard);
router.route("/workout").get(verifyToken,getWorkoutsByDate);
router.route("/workout").post(verifyToken,addWorkout);

module.exports= router;