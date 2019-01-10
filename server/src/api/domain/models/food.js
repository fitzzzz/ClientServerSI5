const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    id: Number
});

const Food = mongoose.model('Food', foodSchema);

module.exports = {
    Food,
};