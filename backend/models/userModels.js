const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true

    },



});

const Student = mongoose.model('Student', studentschema);

module.exports = Student;