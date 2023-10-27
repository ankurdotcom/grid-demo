// const Handsontable = require('handsontable');
//const styleFile = require('handsontable/dist/handsontable.full');

const express = require('express');
const router = require('./routes/router');
const path = require('path');
const compression = require('compression');

const app = express();

// Add Middleware

// Added to improve performance of Application by compressing content
app.use(compression());

// Addedd a virtual 'static' folder linked with 'public' folder to serve static content
app.use('/static', express.static(path.join(__dirname, 'public')));

// Added custom router component to server all content 
app.use("/", router);

// Configure Default Port of App
const PORT = process.env.PORT || 8000;

// Start Server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
