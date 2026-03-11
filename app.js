const express = require('express');
const feedRoutes = require('./routes/feed');
const recipeRoutes = require('./routes/recipe');
const categoryRoutes = require('./routes/category')
const path = require('path');

const app = express();


app.use(express.json());


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/images', express.static(path.join(__dirname,'images')));


app.use('/feed',feedRoutes);
app.use('/recipe',recipeRoutes);
app.use('/category',categoryRoutes);


app.listen(8080);