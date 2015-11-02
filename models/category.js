var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String,
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback){
    Category.find(callback);
}

// Get Category By ID
module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
}


// Create Category
module.exports.createCategories = function(newCategorycallback){
    newCategory.save(callback);
}






