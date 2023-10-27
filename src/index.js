// const Handsontable = require('handsontable');

// const styleFile = require('handsontable/dist/handsontable.full')


const express = require('express');
const router = require('./routes/router');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use("/", router);

// app.use(express.static('public'))

// app.use(express.static('style')) # Multiple Fonders Can be Made Public
// app.use(express.static('js')) // client Side JS files


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
