//dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

//internal imports
const imageUploadRouter = require('./routers/imageUploadRouter');

// initial app
const app = express();

//config the env
dotenv.config();

//default middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/public/`));
app.use(express.urlencoded({ extended: true }));

//database connection
mongoose
   .connect(process.env.MONGOOSE_CONNECTION_STRING)
   .then(() => console.log(`App is successfully connected to Database`))
   .catch((error) => {
      console.log(error);
   });

app.use('/', imageUploadRouter);

//global error handler
app.use((error, req, res, next) => {
   if (res.headerSent) {
      return next(error);
   }
   res.status(500).json({ error });
});
const PORT = process.env.POR || 5000;

app.listen(process.env.PORT, () => {
   console.log(`App is alive on localhost:${process.env.PORT}`);
});
