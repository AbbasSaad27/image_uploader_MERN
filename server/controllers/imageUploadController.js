//dependenices
const mongoose = require('mongoose');
const Image = require('../models/Image');

async function uploadImageToDatabase(req, res, next) {
   console.log(req.file);
   //prepare image url to access
   const imageAccessLink = `http://localhost:5000/uploads/${req.file.filename}`;

   try {
      const newImage = new Image({
         name: req.file.originalname,
         imageAccessLink,
      });
      const savedImage = await newImage.save();

      res.status(200).json({ success: 'Image Saved Successfully To Database', image: savedImage });
   } catch (error) {
      console.log(error);
      next('There was error while uploading the image to database');
   }
}

module.exports = { uploadImageToDatabase };
