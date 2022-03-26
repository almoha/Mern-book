const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // avec Postman : utile pour Body/raw/JSON
app.use(express.urlencoded({ extended: false })); // avec Postman : utile pour x.www-forem-urlencoded

app.use('/api/books', require('./routes/bookRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
