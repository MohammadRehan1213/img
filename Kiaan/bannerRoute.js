const express = require("express");
const multer = require("multer"); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });
const { createadmin, getbanner, deletedata } =
    require('../Kiaan/bannerCtrl');
const router = express.Router();
router.get("/", getbanner)

router.post("/", upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
]), createadmin)

router.delete("/:id", deletedata)


module.exports = router;
