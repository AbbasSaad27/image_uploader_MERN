//dependencies
const express = require('express');
const multer = require('multer');
//internal imports
const { uploadImageToDatabase } = require('../controllers/imageUploadController');
const processMulterImage = require('../middlewares/multerUpload');

//init the router
const router = express.Router();

router.post('/', processMulterImage, uploadImageToDatabase);

//export the router
module.exports = router;
