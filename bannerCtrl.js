const admin = require('./bannerModel')

const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});

const createadmin = (async (req, res) => {
    try {
        let result1, result2, result3;

        if (req.files["image1"]) {
            const dataUrl1 = `data:${req.files["image1"][0].mimetype};base64,${req.files["image1"][0].buffer.toString("base64")}`;
            result1 = await cloudinary.uploader.upload(dataUrl1);
        }
        if (req.files["image2"]) {
            const dataUrl2 = `data:${req.files["image2"][0].mimetype};base64,${req.files["image2"][0].buffer.toString("base64")}`;
            result2 = await cloudinary.uploader.upload(dataUrl2);
        }

        if (req.files["image3"]) {
            const dataUrl3 = `data:${req.files["image3"][0].mimetype};base64,${req.files["image3"][0].buffer.toString("base64")}`;
            result3 = await cloudinary.uploader.upload(dataUrl3);
        }

        const newUser = await admin.create({
            image1: result1 ? result1.secure_url : undefined,
            image2: result2 ? result2.secure_url : undefined,
            image3: result3 ? result3.secure_url : undefined,
        });


        res.status(201).json(newUser)
    } catch (error) {
        console.error(error.message);
        return res.status(500).json(error.message);
    }
});

module.exports = { createadmin }