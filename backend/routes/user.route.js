import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAunthicated.js";
import { singleupload } from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleupload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleupload, updateProfile);

export default router;
