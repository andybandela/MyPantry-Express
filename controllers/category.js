const categories = require('../data');


exports.category = (req,res,next) =>{
    res.status(200).json({
        cat: categories.categories
    });
}