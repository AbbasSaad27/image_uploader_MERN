//dependencies
const multer = require('multer');
const path = require('path');

const UPLOAD_FOLDER = `${__dirname}/../public/uploads/`;

const processMulterUpload = function () {
   const storage = multer.diskStorage({
      destination: (req, file, cb) => {
         cb(null, UPLOAD_FOLDER);
      },
      filename: (req, file, cb) => {
         const extName = path.extname(file.originalname);
         const fileName = file.originalname.replace(extName, '').toLowerCase().split(' ').join('-') + '-' + Date.now();
         const fullFileName = `${fileName}${extName}`;
         cb(null, fullFileName);
      },
   });

   //preapare the multer upload object
   const upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
         const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];
         if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
         } else {
            cb('There was an error in file filter');
         }
      },
   });

   return upload;
};

const processMulterImage = function (req, res, next) {
   const upload = processMulterUpload();
   upload.single('file-input')(req, res, (error) => {
      if (error) {
         res.status(500).json({ message: error.message });
      } else {
         next();
      }
   });
};

module.exports = processMulterImage;
