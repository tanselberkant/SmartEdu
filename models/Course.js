const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchemaa  = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Course = mongoose.model('Course',CourseSchemaa);
module.exports = Course;