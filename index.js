require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const handle404Error = require('./src/middlewares/handle404Error');
const handleError = require('./src/middlewares/handleErrors');

const itemRoute = require('./src/routes/item.route');
const userRoute = require('./src/routes/user.route');
const entriesRoute = require('./src/routes/entries.route');
const outputsRoute = require('./src/routes/outputs.route');
const itemReportRoute = require('./src/routes/item-report.route');
const providerRoute = require('./src/routes/provider.route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/items', itemRoute);
app.use('/api/entry', entriesRoute);
app.use('/api/outputs', outputsRoute);
app.use('/api/report', itemReportRoute);
app.use('/api/providers', providerRoute);
app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORT, () => { console.log(`running on port ${process.env.PORT}`)});