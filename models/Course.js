const mongoose = require('mongoose');
const slugify = require('slugify');
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
    },
    slug : {
        type: String,
        unique: true
    }
})

CourseSchemaa.pre('validate', function(next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next();
})

const Course = mongoose.model('Course',CourseSchemaa);
module.exports = Course;