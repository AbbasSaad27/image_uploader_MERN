function uploadImageToDatabase(req, res, next) {
   console.log(req.file);
   console.log('Request is coming from database');
}

module.exports = { uploadImageToDatabase };
