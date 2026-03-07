const express = require('express');

const feedRoutes = require('./routes/feed');
const recipeRoutes = require('./routes/recipe')

const app = express();

app.use('/feed',feedRoutes);
app.use('/recipe',recipeRoutes);


app.listen(8080);