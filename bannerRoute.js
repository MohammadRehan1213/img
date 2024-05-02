const express = require("express");
const multer = require("multer"); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });
const { createadmin } =
    require('./bannerCtrl');
const router = express.Router();

router.post("/", upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
]), createadmin)


module.exports = router;
