// const Handsontable = require('handsontable');

// const styleFile = require('handsontable/dist/handsontable.full')


const express = require('express');
const router = require('./routes/router')

const app = express();

const PORT = process.env.PORT ?? 8000

app.use("/", router);


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
