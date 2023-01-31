const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    rollno: {
        required: true,
        type: Number
    },
   hindi: Number,
   english: Number,
   math: Number,
   total: Number,
   percentage: Number,
   result: String,
   grade: String
})

module.exports = mongoose.model('student', dataSchema)