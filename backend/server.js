const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection= mongoose.connection;
connection.once('open', () => {
console.log("Mongodb database connection established successfully !!");
})
const patientsRouter = require('./routes/patients');
const chambresRouter = require('./routes/chambres');
const matérielsRouter = require('./routes/matériels');
const consommablesRouter = require('./routes/consommables');
app.use('/patients', patientsRouter);
app.use('/chambres', chambresRouter);
app.use('/materiels', matérielsRouter);
app.use('/consommables', consommablesRouter);
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});