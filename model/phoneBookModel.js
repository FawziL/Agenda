const mongoose = require("mongoose");

const phoneBookSchema = new mongoose.Schema({
    name:{type:String},
    lastName:{type:String},
    phoneNumber:{type:String},
});

const phoneBookModel = mongoose.model('phoneBook', phoneBookSchema);

module.exports = phoneBookModel