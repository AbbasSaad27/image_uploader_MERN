//dependencies
const express = require('express');
const dotenv = require('dotenv');

// initial app
const app = express();

//config the env
dotenv.config();

app.listen(3000, () => {
   console.log(`App is alive on localhost:3000`);
});
